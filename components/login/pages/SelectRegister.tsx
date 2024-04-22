import { Button, Text, View } from "react-native";
import SynergiaCard from "../../elements/login/SynergiaCard";
import Section from "../../elements/login/Section";

// @ts-ignore
function SelectRegister({ navigation }) {
    return (
    <View>
        <View>
            <Section title="Pick your E-register">
                You can pick your e-register provider from the list of supported providers below.
            </Section>
            <SynergiaCard/>
        </View>
    </View>
    );
}

export default SelectRegister