import React from 'react';
import { useState } from 'react';
import { Button, TextInput,StyleSheet,View } from "react-native";

export default function AddTodo({handleSubmit}){
const[text,setText] = useState("")
const changeHandler =(val)=>{
    //console.log(val);
    setText(val);
}
  return (
      <View>
          <TextInput placeholder="Enter todo text" onChangeText={text=>{changeHandler(text)}} style={styles.textInput}/>
          <Button onPress={()=>{handleSubmit(text)}} title='ADD TODO' style={styles.addTodoButton}/>
      </View>
  );
};

const styles=StyleSheet.create({
    addTodoButton: {
        backgroundColor:'coral',
    },
    textInput :{
        padding:15
    }

})

