import { View, Text ,StyleSheet, } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';



const SignUpScreen = () => {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordRepeat, setpasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed =() =>{
    navigation.navigate('ConfirmEmail');
  };
 
  const onSignInPress =()=>{
   navigation.navigate('SignIn')
  };
  const onTermsOfUsepressed =()=>{
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPressed =()=>{
    console.warn('onPrivacyPressed');
  };
  return (
    <View style={styles.root}>
     <Text style={styles.title}>Create an account</Text>

     <CustomInput
          placeholder="Username"
          value={username}
          setValue={setusername}
        />

         <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

          <CustomInput
          placeholder="Password"
          value={password}
          setValue={setpassword}
        />

        <CustomInput
          placeholder=" Repeat Password"
          value={passwordRepeat}
          setValue={setpasswordRepeat}
        />

        <CustomButton text="Register" onPress={onRegisterPressed}/>

        <Text style={styles.text}>
         By registering, you confirm that you accept our{' '} 
         <Text style={styles.link} onPress={onTermsOfUsepressed}>Terms of Use</Text> and{' '}
         <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
         </Text>

         <SocialSignInButtons/>

        <CustomButton 
        text="Have an account? Sign in" 
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

export default SignUpScreen