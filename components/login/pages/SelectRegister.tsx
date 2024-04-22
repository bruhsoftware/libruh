import { Button, Text, View } from "react-native";

// @ts-ignore
function SelectRegister({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>select register Screen</Text>
        <Button title="Libruh Synergia" onPress={() => navigation.navigate('synergiaLogin')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}

export default SelectRegister