import { Button, ScrollView, Text, View } from "react-native";
import SynergiaCard from "@ui/login/elements/SynergiaCard";
import Section from "@ui/elements/Section";
import { useTheme } from "@react-navigation/native";
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
            </View>
        </ScrollView>
    );
}

export default SelectRegister