import React from "react";
import { StyleSheet,TouchableOpacity,View,Text } from "react-native";

import { FlatList } from "react-native";

const TodoItem = ({todos}) => {
  return (
      <FlatList
              keyExtractor={(item) => item.key}
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {handlePress(item.key);}} >
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
              )}
            />
  );
};

const styles = StyleSheet.create({
    item: {
      flex:1,
      padding: 16,
      marginTop: 16,
      borderWidth: 1,
      borderColor: "#bbb",
      borderRadius: 10,
      borderStyle: "dashed",
      marginLeft:10
    },
    itemText : {
        marginLeft: 10,
    }
  });
export default TodoItem;
