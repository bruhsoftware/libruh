import { Button, Text, View } from "react-native";

// @ts-ignore
function SynergiaLogin({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: "white"}}>synergia login Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}

export default SynergiaLogin;