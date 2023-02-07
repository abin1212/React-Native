import { View, Text ,StyleSheet, } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';



const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const navigation =useNavigation(); 

  const onSendPressed =() =>{
    navigation.navigate('NewPassword')
  };
 
  const onSignInPress =()=>{
    navigation.navigate('SignIn')
  };

  return (
    <View style={styles.root}>
     <Text style={styles.title}>Reset your password</Text>

     <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

      
        <CustomButton text="Send" onPress={onSendPressed}/>

        <CustomButton 
        text="Back to Sign in" 
        onPress={onSignInPress} 
        type="TERTIARY"/>
    </View>
  );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
    },

    title:{
      fontSize:24,
      fontWeight: 'bold',
      color: '#051c60',
      margin: 10,
    },
    text:{
      color: 'gray',
      marginVertical: 10,
    },
    link:{
       color:'#FDB075'
    }
});

export default ForgotPasswordScreen
