import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

type SectionProps = PropsWithChildren<{
    title: string;
  }>;
  
  function Section({children, title}: SectionProps): React.JSX.Element {
    const { colors, dark } = useTheme();
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: colors.text,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }

export default Section;