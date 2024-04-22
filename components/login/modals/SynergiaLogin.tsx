import React from "react";
import { Alert, Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

// @ts-ignore
function SynergiaLogin({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [eggCounter, setEggCounter] = React.useState(5)
    function validate(username: string, password: string) {
      if(username != "" && password != "") {
        Alert.alert(username, password)
      } else {
        Alert.alert("Error", "Please fill out all fields!")
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 48}}>
          <TouchableOpacity activeOpacity={1} onPress={() => (eggCounter === 0 ? navigation.navigate('synergiaEasterEgg') && setEggCounter(5) : setEggCounter(eggCounter-1))}>
            <Image source={require('../../../assets/landing-logo-synergia.png')} style={{width: 284, height: 88}}/>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 28}}>
          <TextInput
            style={{backgroundColor: "#222", color: "#fff", fontSize: 16, paddingHorizontal: 24, paddingVertical: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomWidth: 1, borderColor: "#383838"}}
            onChangeText={onChangeUsername}
            placeholder={"Username, e.g. 101010u"}
            value={username}
          />
          <TextInput
            style={{backgroundColor: "#222", color: "#fff", fontSize: 16, paddingHorizontal: 24, paddingVertical: 20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}
            onChangeText={onChangePassword}
            placeholder={"Password"}
            value={password}
          />
          <TouchableOpacity onPress={() => validate(username, password)} style={{backgroundColor: '#985c88', borderRadius: 15, paddingVertical: 16, marginTop: 32, marginHorizontal: 64}} >
            <Text style={{color: "#fff", textAlign:"center", fontSize: 16, fontWeight: "500"}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default SynergiaLogin;