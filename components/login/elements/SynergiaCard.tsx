import { useNavigation, useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SpacerBackground } from "@ui/elements/Spacer";
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";

const SynergiaCard = () => {
    const navigation = useNavigation();
    const {dark} = useTheme();
    const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
    return (
        // @ts-ignore
        <TouchableOpacity style={{backgroundColor: colors.secondaryBg, marginHorizontal: 24, paddingLeft: 16, paddingVertical: 16, borderRadius: 15, marginTop: 16, display: "flex", flexDirection: "row"}} onPress={() => navigation.navigate('synergiaLogin')}>
            <Image source={require('@assets/landing-icon-synergia.png')} style={{height: 96, width: 96, marginRight: 16}}/>
            <View style={{justifyContent: "center", marginRight: 16}}>
                <SpacerBackground size={64} color={colors.spacer}/>
            </View>
            <View style={{justifyContent: "center"}}>
                <Text style={{fontWeight: "600", color: colors.text, fontSize: 22}}>Librus® Synergia</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SynergiaCard;