import { Button, Text, View } from "react-native";
import SynergiaCard from "@ui/login/elements/SynergiaCard";
import Section from "@ui/elements/Section";

// @ts-ignore
function SelectRegister({ navigation }) {
    return (
        <View>
            <View>
                <Section title="Wybierz swój E-dziennik" style={{marginLeft: 16}}>
                    Niektóre nazwy mogą być chronione prawami autorskimi.
                </Section>
                <SynergiaCard/>
            </View>
        </View>
    );
}

export default SelectRegister