import { Text, View } from "react-native";
import React from "react";

export default function Spacer({ size }: { size: number }) {
  return <View style={{ height: size }} />;
}

export function SpacerBackground({ size, color }: { size: number, color: string }) {
  return <View style={{ height: size, backgroundColor: color, borderRadius: 15 }}><Text>&nbsp;</Text></View>;
}
  
// I need you my love from native iOS/Android