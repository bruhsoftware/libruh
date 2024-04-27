import { useTheme } from "@react-navigation/native";
import React, { useRef } from "react";
import { Alert, Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";
import { Ionicons } from '@expo/vector-icons';
// i am going to commit a war crime if this doesn't work

// @ts-ignore
function SynergiaLogin({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false); 
  const [eggCounter, setEggCounter] = React.useState(5)
    function logIn(username: string, password: string) {
      if(username != "" && password != "") {
        Alert.alert(username, password)
        return
      } else {
        Alert.alert("Error", "Please fill out all fields!")
        return
      }
    }
  const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
  }; 

  const {dark} = useTheme();
  const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
  const inputTwo = useRef();
  // theming
    return (
      <View style={{ flex: 1 }}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 48}}>
          {/* onPress={() => (eggCounter === 0 ? (function() {navigation.navigate('synergiaEasterEgg'); setEggCounter(5)}) : setEggCounter(eggCounter-1))} */}
          <TouchableOpacity activeOpacity={1} onPress={() => (eggCounter === 0 ? (navigation.navigate('synergiaEasterEgg'), setEggCounter(5)) : setEggCounter(eggCounter-1))}>
            <Image source={require('@assets/landing-logo-synergia.png')} style={{width: 284, height: 88}}/>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 28}}>
          <TextInput
            style={{backgroundColor: colors.secondaryBg, fontSize: 16, paddingHorizontal: 24, paddingVertical: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomWidth: 1, borderColor: colors.background}}
            onChangeText={onChangeUsername}
            placeholder={"Username, e.g. 101010u"}
            placeholderTextColor={colors.secondaryText}
            returnKeyType="next"
            value={username}
            autoFocus
            onSubmitEditing={() => {
              // @ts-ignore
              inputTwo.current.focus();
            }}
          />
          <TextInput
            style={{backgroundColor: colors.secondaryBg, paddingHorizontal: 24, paddingVertical: 20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, fontSize: 16}}
            onChangeText={onChangePassword}
            placeholderTextColor={colors.secondaryText}
            placeholder={"Password"}
            value={password}
            secureTextEntry={!showPassword}
            // @ts-ignore
            ref={inputTwo}
          />
          <TouchableOpacity onPress={() => logIn(username, password)} style={{backgroundColor: '#985c88', borderRadius: 15, paddingVertical: 16, marginTop: 32, marginHorizontal: 64}} >
            <Text style={{color: "#fff", textAlign:"center", fontSize: 16, fontWeight: "500"}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default SynergiaLogin;