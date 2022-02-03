import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
export const Header = () => {
  return <View style={styles.header}>
      <Text style={styles.title}> TODO LIST</Text>
  </View>;
};

const styles = StyleSheet.create({
    header: {
        backgroundColor:'coral',
        padding:20,
        paddingTop:30
    },
    title: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        padding:20
    }
})

