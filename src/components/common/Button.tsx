import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, useColorScheme, Pressable } from 'react-native';

type ButtonProps = PropsWithChildren<{}>;

  export default function Button({children}: ButtonProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <Pressable style={styles.container}>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? "rgb(0, 122, 255)" : "rgb(0, 122, 255)",
            },
          ]}>
          {children}
        </Text>
      </Pressable>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
      borderRadius: 10,
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