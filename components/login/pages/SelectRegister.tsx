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
            <View style={{marginTop: 8}}>
                {/*<Section title="Wybierz swój E-dziennik" style={{marginLeft: 16}}>
                    Niektóre nazwy mogą być chronione prawami autorskimi.
                </Section>*/}
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginLeft: 32}}>DOSTĘPNE E-DZIENNIKI</Text>
                {/*<SynergiaCard/>*/}
                <View style={{marginHorizontal: 16, paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                {/* "Synergia" item */}
                    <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={() => {navigation.navigate('synergiaLogin')}}>
                        <Image source={require('@assets/icons/icon-synergia.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Librus Synergia®</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginLeft: 32, marginTop: 32}}>INNE</Text>
                <View style={{marginHorizontal: 16}}>
                    {/* "About App" item */}
                    <TouchableOpacity onPress={() => navigation.navigate('aboutApp')} style={{flexDirection: "row", paddingVertical: 12, alignItems: "center", backgroundColor: colors.secondaryBg, paddingLeft: 16, borderRadius: 15}}>
                        <Image source={require('@assets/icons/icon-os.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>O aplikacji</Text>
                        <View style={{marginLeft: "auto", marginRight: 14, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default SelectRegister