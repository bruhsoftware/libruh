import { useTheme } from "@react-navigation/native";
import React, { useRef } from "react";
import { ActivityIndicator, Alert, Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from "react-native";
// i am going to commit a war crime if this doesn't work

// @ts-ignore
function SynergiaLogin({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false); 
  const [eggCounter, setEggCounter] = React.useState(5)
  const [isLoading, setIsLoading] = React.useState(false)
    function logIn(username: string, password: string) {
      if(username != "" && password != "") {
        if(isLoading) {
          return
        } else {
          setIsLoading(true)
          Alert.alert(username, password, [{text: "OK", style: "destructive", onPress: () => {
            setIsLoading(false)
          }}])
          //setTimeout(() => {setIsLoading(false)}, 3000)
          return
        }
      } else {
        Alert.alert("Błąd", "Proszę wypełnić wszystkie pola!")
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
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="never">
          <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 48}}>
            {/* onPress={() => (eggCounter === 0 ? (function() {navigation.navigate('synergiaEasterEgg'); setEggCounter(5)}) : setEggCounter(eggCounter-1))} */}
            <TouchableWithoutFeedback onPress={() => (eggCounter === 0 ? (navigation.navigate('synergiaEasterEgg'), setEggCounter(5)) : setEggCounter(eggCounter-1))}>
              <Image source={dark ? require('@assets/synergia/logo-white.png') : require('@assets/synergia/logo-rgb.png')} style={{width: 284, height: 88}}/>
            </TouchableWithoutFeedback>
          </View>
          <View style={{paddingHorizontal: 16}}>
            <Text style={{color: colors.secondaryText, marginBottom: 8, marginLeft: 16}}>ZALOGUJ SIĘ</Text>
            <View style={{backgroundColor: colors.secondaryBg, paddingLeft: 16, borderRadius: 15}}>
              <TextInput
                style={{ fontSize: 16, paddingRight: 24, paddingVertical: 16, borderBottomWidth: 1, borderColor: colors.spacer, color: colors.text}}
                onChangeText={onChangeUsername}
                placeholder={"Login, np. 101010u"}
                placeholderTextColor={colors.label}
                returnKeyType="next"
                value={username}
                autoFocus
                onSubmitEditing={() => {
                  // @ts-ignore
                  inputTwo.current.focus();
                }}
              />
              <TextInput
                style={{ paddingRight: 24, paddingVertical: 16, fontSize: 16, color: colors.text}}
                onChangeText={onChangePassword}
                placeholderTextColor={colors.label}
                placeholder={"Hasło"}
                value={password}
                secureTextEntry={!showPassword}
                // @ts-ignore
                ref={inputTwo}
                onSubmitEditing={() => {
                  // @ts-ignore
                  logIn(username, password);
                }}
              />
            </View>
            <TouchableOpacity onPress={() => logIn(username, password)} style={{flexDirection: "row", marginTop: 24, backgroundColor: colors.secondaryBg, paddingLeft: 16, borderRadius: 15}}>
                <Text style={{fontSize: 16, paddingRight: 24, paddingVertical: 16, color: colors.primary, fontWeight: '600'}}>Zaloguj się</Text>
                <View style={{marginLeft: "auto", marginRight: 12, justifyContent: "center"}}>
                  {isLoading ? <ActivityIndicator size="small"/> : <Ionicons name="log-in-outline" size={32} color={colors.primary} />}
                </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
}

export default SynergiaLogin;