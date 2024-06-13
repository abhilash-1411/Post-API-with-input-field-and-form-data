
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


  const [nameError,setNameError]=useState(false);
  const [ageError,setAgeError]=useState(false);
  const [emailError,setEmailError]=useState(false);


  const saveData= async()=>{
if(!name){
  setNameError(true);
}
else{
  setNameError(false)
}

if(!age){
  setAgeError(true);
}
else{
  setAgeError(false)
}

if(!email){
  setEmailError(true);
}
else{
  setEmailError(false)
}

if(!name || !age || !email){
  return false;
}

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
    {
      nameError?<Text style={styles.errorText}> Please enter valid name</Text>:null
    }

<TextInput 
    style={styles.input}
    placeholder='Enter your age' 
    value={age} 
    onChangeText={(text)=>setAge(text)} />
    {
      ageError?<Text style={styles.errorText}> Please enter valid age</Text>:null
    }

<TextInput 
    style={styles.input}
    placeholder='Enter your email' 
    value={email} 
    onChangeText={(text)=>setEmail(text)} />
    {
      emailError?<Text style={styles.errorText}> Please enter valid email</Text>:null
    }
    

    <Button title="Submit Details" onPress={saveData} ></Button>
  </View>
  );
}

const styles=StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:2,
    margin:20,
    marginBottom:5

  },
  errorText:{
    color:'red',
    marginLeft:20
  }
})

export default App;
