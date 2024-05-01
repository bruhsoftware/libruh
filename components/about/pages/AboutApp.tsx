import { Alert, Button, Image, Linking, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import Section from "@ui/elements/Section";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";
import {version} from "@package"
import React from "react";

// @ts-ignore
function AboutApp({ navigation }) {
    const {dark} = useTheme();
    const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
    const [eggCounter, setEggCounter] = React.useState(5)
    return (
        <ScrollView>
            <View style={{paddingHorizontal: 16}}>
                <Image source={dark ? require("@assets/libruh/logo.png") : require("@assets/libruh/logo_lightbg.png")} style={{width: 327, height: 177, marginTop: 8, marginLeft: 12}}/>
                {/* Section Header */}
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginLeft: 16}}>O APLIKACJI</Text>
                <View style={{paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                    {/* Section Title */}
                    <Section title="Libruh" style={{color: colors.text, paddingVertical: 16, paddingRight: 24, borderBottomWidth: 1, borderBottomColor: colors.spacer}}>Alternatywny klient do e-dziennika Synergia.</Section>
                    <TouchableOpacity activeOpacity={1} style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => (eggCounter === 0 ? (navigation.navigate('versionsModal'), setEggCounter(5)) : setEggCounter(eggCounter-1))}>
                        <Image source={require('@assets/icons/icon-version.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Wersja</Text>
                        <View style={{marginLeft: "auto", marginRight: -6, justifyContent: "center"}}>
                            <Text style={{color: colors.label, fontSize: 16}}>v{version}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginTop: 24, marginLeft: 16}}>WSPARCIE</Text>
                <View style={{paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                    {/* "GitLab" item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}} onPress={() => {Linking.openURL('https://git.parpok.xyz/bruh-software/libruh')}}>
                        <Image source={require('@assets/icons/icon-gitlab.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>GitLab Libruh'a</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                    {/* "Discord" item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => {Linking.openURL('https://discord.gg/Dj73wv6BGm')}}>
                        <Image source={require('@assets/icons/icon-discord.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Serwer Discord</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginTop: 24, marginLeft: 16}}>INNE</Text>
                <View style={{paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                    {/* "Authors" item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}} onPress={() => {Alert.alert("Error", "To be implemented")}}>
                        <Image source={require('@assets/icons/icon-authors.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Autorzy</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                    {/* "Libraries/Acknowledgements" item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => {navigation.navigate('acknowledgements')}}>
                        <Image source={require('@assets/icons/icon-libraries.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Wykorzystane biblioteki</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default AboutApp;