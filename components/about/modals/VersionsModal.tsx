import { Button, Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { LibruhThemeDark, LibruhThemeLight } from "@constants/themes";
import { useTheme } from "@react-navigation/native";
import * as Device from 'expo-device';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import * as Updates from 'expo-updates';

import { dependencies } from '@package';

// @ts-ignore
function VersionsModal({ navigation }) {
  const {dark} = useTheme();
  const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
    return (
      <ScrollView>
        <View style={{paddingHorizontal: 16}}>
            <View style={{marginTop: 24, paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                {/* Device Name */}
                <View style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}}>
                    <Image source={require('@assets/icons/icon-device.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                    <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Urządzenie</Text>
                    <View style={{marginLeft: "auto", justifyContent: "center"}}>
                        <Text style={{color: colors.label, fontSize: 16}}>{Device.modelName} ({Device.deviceYearClass || "?"})</Text>
                    </View>
                </View>
                {/* OS Version */}
                <View style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('@assets/icons/icon-os.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                    <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>System</Text>
                    <View style={{marginLeft: "auto", justifyContent: "center"}}>
                        <Text style={{color: colors.label, fontSize: 16}}>{Device.osName} {Device.osVersion} ({Device.osBuildId})</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 24, paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                {/* React.js */}
                <View style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.spacer}}>
                    <Image source={require('@assets/icons/icon-react.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                    <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>React.js</Text>
                    <View style={{marginLeft: "auto", justifyContent: "center"}}>
                        <Text style={{color: colors.label, fontSize: 16}}>{React.version}</Text>
                    </View>
                </View>
                {/* React Native */}
                <View style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}}>
                    <Image source={require('@assets/icons/icon-react.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                    <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>React Native</Text>
                    <View style={{marginLeft: "auto", justifyContent: "center"}}>
                        <Text style={{color: colors.label, fontSize: 16}}>{dependencies['react-native']}</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 24, paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
                {/* Reload app */}
                <TouchableOpacity style={{paddingVertical: 12, paddingRight: 24, flexDirection: "row", alignItems: "center"}} onPress={async () => {await Updates.reloadAsync()}}>
                        <Image source={require('@assets/icons/icon-reload.png')} style={{width: 26, height: 26, marginRight: 10, borderRadius: 5 }}></Image>
                        <Text style={{color: colors.text, fontSize: 16, fontWeight: "600"}}>Przeładuj aplikację</Text>
                        <View style={{marginLeft: "auto", marginRight: -10, justifyContent: "center"}}>
                            {<Ionicons name="chevron-forward" size={16} color={colors.label} />}
                        </View>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
}

export default VersionsModal;