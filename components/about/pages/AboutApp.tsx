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
                <Image source={dark ? require("@assets/libruh/logo.png") : require("@assets/libruh/logo_lightbg.png")} style={{width: 327, height: 177, alignSelf: "center", justifyContent: "center"}}/>
                {/* Section Header */}
                <Text style={{color: colors.secondaryText, marginVertical: 5, marginLeft: 16}}>O APLIKACJI</Text>
                <View style={{paddingLeft: 16, borderRadius: 15, backgroundColor: colors.secondaryBg}}>
                    {/* Section Title */}
                    <Section title="Libruh" style={{color: colors.text, paddingVertical: 16, paddingRight: 24, borderBottomWidth: 1, borderBottomColor: colors.spacer}}>Alternatywny klient do e-dziennika Synergia.</Section>
                    {/* Librus api item */}
                    <TouchableOpacity activeOpacity={1} style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}} onPress={() => (eggCounter === 0 ? (navigation.navigate('versionsModal'), setEggCounter(5)) : setEggCounter(eggCounter-1))}>
                        <Image source={require('@assets/icons/icon-synergia.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Wersja API</Text>
                        <View style={{marginLeft: "auto", marginRight: -6, justifyContent: "center"}}>
                            <Text style={{color: colors.label, fontSize: 16}}>v. undefined</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Changelog item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => {Alert.alert("Error", "To be implemented")}}>
                        <Image source={require('@assets/icons/icon-changelog.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Co nowego?</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center", flexDirection: "row"}}>
                            <Text style={{color: colors.label, fontSize: 16, marginRight: 4, textAlign: "center"}}>v{version}</Text>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
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
                    {/* Authors item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}} onPress={() => {Alert.alert("Error", "To be implemented")}}>
                        <Image source={require('@assets/icons/icon-authors.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Autorzy</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                    {/* Libraries/Acknowledgements item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => {navigation.navigate('acknowledgements')}}>
                        <Image source={require('@assets/icons/icon-libraries.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Wykorzystane biblioteki</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                </View>
                {/* CREDITS text */}
                <Text style={{marginHorizontal: 24, textAlign: "center", color: colors.secondaryText, marginTop: 28, paddingBottom: 24}}>MADE WITH ❤️ IN 🇵🇱 BY BRUH SOFTWARE{'\n'}{'\n'}Libruh is not affiliated with nor endorsed by "Librus Synergia®" - Librus sp. z. o. o. All rights go to their respective owners.</Text>
            </View>
        </ScrollView>
    );
}

export default AboutApp;