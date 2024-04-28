import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SynergiaCard from "@ui/login/elements/SynergiaCard";
import Section from "@ui/elements/Section";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";

// @ts-ignore
function SelectRegister({ navigation }) {
    const {dark} = useTheme();
    const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
    return (
        <ScrollView>
            <View style={{paddingHorizontal: 16}}>
                <Image source={dark ? require("@assets/libruh/logo.png") : require("@assets/libruh/logo_lightbg.png")} style={{width: 327, height: 177, marginTop: 8, marginLeft: 12}}/>
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginLeft: 16}}>O APLIKACJI</Text>
                <View style={{paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                    <Section title="Libruh" style={{color: colors.text, paddingVertical: 16, paddingRight: 24, borderBottomWidth: 1, borderBottomColor: colors.spacer}}>Alternatywny klient do e-dziennika Librus Synergia.</Section>
                    <TouchableOpacity style={{paddingVertical: 14, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}}>
                        <Image source={require('@assets/icons/icon-authors.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                            <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Autorzy</Text>
                            <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                                {<Ionicons name="chevron-forward" size={16} color={colors.text} />}
                            </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingVertical: 14, paddingRight: 24, flexDirection: "row", alignItems: "center"}}>
                        <Image source={require('@assets/icons/icon-authors.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                            <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Autorzy</Text>
                            <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                                {<Ionicons name="chevron-forward" size={16} color={colors.text} />}
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default SelectRegister