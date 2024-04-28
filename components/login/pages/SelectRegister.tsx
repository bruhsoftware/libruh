import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
                <Text style={{color: colors.secondaryText, marginVertical: 8, marginLeft: 16}}>DOSTĘPNE E-DZIENNIKI</Text>
                <SynergiaCard/>
                <View style={{marginHorizontal: 16, marginTop: 8}}>
                    <TouchableOpacity onPress={() => navigation.navigate('aboutApp')} style={{flexDirection: "row", marginTop: 24, backgroundColor: colors.secondaryBg, paddingLeft: 16, borderRadius: 15}}>
                        <Text style={{fontSize: 16, paddingRight: 24, paddingVertical: 16, color: colors.primary}}>O aplikacji</Text>
                        <View style={{marginLeft: "auto", marginRight: 12, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={24} color={colors.primary} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default SelectRegister