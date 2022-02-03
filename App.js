import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Header} from "./components/Header";
import AddTodo from "./components/AddTodo";

export default function App() {
  const[todos,setTodos] = useState([
    {name:"Have breakfast",key:"1"},
    {name:"Check mail",key:"2"},
    {name:"Learn react native",key:"3"},
    {name:"Have lunch",key:"4"},
    {name:"Sleep",key:"5"},
    {name:"Learn react native",key:"6"},
    {name:"Have tea",key:"7"},
    {name:"Learn react native",key:"8"},
  ]);

  const handlePress = (todoId)=>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=>todo.key!=todoId);
    })
  }

  const handleSubmit= (todoName)=>{
    console.log('handle Submit Called');
    setTodos(prevTodos=>{
      return [{name:todoName,key:Math.random.toString},...prevTodos];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <View>
        <AddTodo handleSubmit={handleSubmit}/>
      </View>
      <View style={styles.list}>
        <FlatList 
          keyExtractor={item=>item.key}
          data={todos}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{handlePress(item.key)}}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
          )
        }
         />
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  textStyle: {
    padding: 16,
    marginTop: 16,
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius:10,
    borderStyle:"dashed"
    },
  list: {
    marginTop:20,
  },
  content: {
    padding:20,
  }
});
