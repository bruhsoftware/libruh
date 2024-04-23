"use strict";

import cheerio from "cheerio";

/**
 * Make boolean from title
 * @param status  Librus status
 * @returns {boolean}
 */
export function makeBoolean(status) {
  return status.toLowerCase() === "tak";
}

/**
 * API resource
 * @type {Resource}
 */
export class Resource {
  constructor(api) {
    this.api = api;
  }
}

/** Export */
/*module.exports = {
  Resource: Resource,
  makeBoolean: makeBoolean,
};*/
