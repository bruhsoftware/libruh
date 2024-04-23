import { Button, Text, View } from "react-native";
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";
import { useTheme } from "@react-navigation/native";

// @ts-ignore
function SynergiaLoginEasterEgg({ navigation }) {
  const {dark} = useTheme();
  const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: colors.text}}>daj passy do librusa UwU 🥺 👉👈{'\n'}~ Parpok, 2024</Text>
      </View>
    );
}

export default SynergiaLoginEasterEgg;