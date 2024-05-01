import { Button, Image, Linking, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import Section from "@ui/elements/Section";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";
import { dependencies, devDependencies } from "@package"
import React from "react";
// @ts-ignore

let libs = {...dependencies, ...devDependencies}

//console.error(libs)

// @ts-ignore
function Acknowledgements({ navigation }) {
    const {dark} = useTheme();
    const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
    const [eggCounter, setEggCounter] = React.useState(5)
    return (
        <ScrollView>
            <View style={{paddingHorizontal: 16}}>
                {/* Section Header */}
                <View style={{paddingHorizontal: 16, borderRadius:15, backgroundColor: colors.secondaryBg, marginTop: 24, flexDirection: "row", alignItems: "center"}}>
                    {/* Section Title */}
                    <Image source={require('@assets/icons/icon-thanks.png')} style={{width: 70, height: 70, marginRight: 16, borderRadius: 15 }}></Image>
                    <Section title="Dzięki!" style={{color: colors.text, paddingVertical: 16}}>Te biblioteki pomogły napisać{`\n`}tą aplikacje!</Section>
                </View>
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginLeft: 16, marginTop: 24}}>LISTA UŻYTYCH BIBLIOTEK</Text>
                {/* List of libraries */}
                <View style={{paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg, marginBottom: 32}}>
                    {/* for each in libs, display "library info" item */}
                    {Object.keys(libs).map((k, v) => {
                        return (
                            <View key={k} style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}}>
                                <Image source={require('@assets/icons/icon-library.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                                <Text style={{color: colors.text, fontSize: 16, fontWeight: "600", maxWidth: 200}}>{k}</Text>
                                <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                                    {/* @ts-ignore */}
                                    <Text style={{color: colors.label, fontSize: 16}}>{libs[`${k}`]}</Text>
                                </View>
                            </View>
                        )
                    })}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => {Linking.openURL('https://git.parpok.xyz/bruh-software/libruh/-/blob/main/package.json')}}>
                        <Image source={require('@assets/icons/icon-gitlab.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Zobacz na GitLabie</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default Acknowledgements;