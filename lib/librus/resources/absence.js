"use strict";
import _ from 'lodash-es';
import { makeBoolean, Resource } from "../tools.js";

export class Absence extends Resource {
  /**
   * Get absence info
   * https://synergia.librus.pl/przegladaj_nb/szczegoly
   *
   * @param id  Absence ID
   * @returns {Promise}
   */
  getAbsence(id) {
    const checkForUndefined = (data) => {
      for (const el in data) {
        if (data[el] === undefined) return true;
        else continue;
      }

      return false;
    };

    const absenceData = this.api
      ._tableMapper(`przegladaj_nb/szczegoly/${id}`, "table.decorated tbody", [
        "type",
        "category",
        "date",
        "subject",
        "lessonHour",
        "teacher",
        "trip",
        "addedBy",
      ])
      .then((data) => {
        if (checkForUndefined(data)) {
          // Dual check, because some absences can have 8 values and another 7.
          return this.api
            ._tableMapper(
              `przegladaj_nb/szczegoly/${id}`,
              "table.decorated tbody",
              [
                "type",
                "date",
                "subject",
                "lessonHour",
                "teacher",
                "trip",
                "addedBy",
              ]
            )
            .then((secData) => {
              return _.assign(secData, {
                trip: makeBoolean(data.trip),
              });
            });
        } else {
          return _.assign(data, {
            trip: makeBoolean(data.trip),
          });
        }
      });

    return absenceData;
  }

  /**
   * Get total user absence
   * https://synergia.librus.pl/przegladaj_nb/uczen
   *
   * @returns {Promise}
   */
  getAbsences() {
    let semesterSize = -1;

    /** Parser callback */
    let parser = ($, row) => {
      /** Get rows in semester */
      let semesterRow = $(row).find(".center.bolded");
      if (semesterRow.length) {
        if ($(semesterRow).trim() === "Okres 1") semesterSize = $(row).index();
        return;
      }

      /** Get absence list */
      let cols = $(row).children("td"),
        date = $(cols[0]).trim();
      if (!date.length) return;

      /** Get absence sheet */
      let table = _.map($(cols[1]).children(), (column) => {
        let type = $(column).trim();
        if (!type.length) return null;
        return {
          type: type,
          id: parseInt(
            type.length &&
              $(column)
                .find("a")
                .attr("onclick")
                .match(/\/szczegoly\/(\d*)/)[1]
          ),
        };
      });
      return {
        date: date,
        table: table,
        info: _.chain($(cols))
          .slice(-5)
          .map((obj) => $(obj).trim())
          .value(),
      };
    };

    /** Make api call */
    return this.api
      ._mapper(
        "przegladaj_nb/uczen",
        "table.center.big.decorated tr[class*='line']",
        parser
      )
      .then((array) => {
        return _.chain(array)
          .omit(_.isUndefined)
          .groupBy((obj, index) => +(index < semesterSize))
          .value();
      });
  }
};
