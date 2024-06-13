
import React ,{useState} from 'react';
import {
 Button,StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const App=()=> {
  const [name,setName]=useState('');
  const [age,setAge]=useState(0);
  const [email,setEmail]=useState('');

  const saveData= async()=>{
    const url="http://10.0.2.2:3000/users";
    let result=await fetch(url,{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({name,age,email})
   } );
    result=await result.json();
    if(result){
      console.warn("Data added successfully")
    }

    
  }
   return (
  <View>
    <Text style={{fontSize:25}}>Student Details</Text>
    <TextInput 
    style={styles.input}
    placeholder='Enter your name' 
    value={name} 
    onChangeText={(text)=>setName(text)} />

<TextInput 
    style={styles.input}
    placeholder='Enter your age' 
    value={age} 
    onChangeText={(text)=>setAge(text)} />

<TextInput 
    style={styles.input}
    placeholder='Enter your email' 
    value={email} 
    onChangeText={(text)=>setEmail(text)} />
    

    <Button title="Submit Details" onPress={saveData} ></Button>
  </View>
  );
}

const styles=StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:2,
    margin:20,

  }
})

export default App;
