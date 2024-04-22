import { Button, Text, View } from "react-native";
import SynergiaCard from "../../elements/login/SynergiaCard";
import Section from "../../elements/login/Section";

// @ts-ignore
function SelectRegister({ navigation }) {
    return (
        <View>
            <View>
                <Section title="Pick your E-register">
                    Some names may be copyrighted.
                </Section>
                <SynergiaCard/>
            </View>
        </View>
    );
}

export default SelectRegister