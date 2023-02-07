import { View, Text, Image,StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/qkq.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';


const SignInScreen = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();


  const onSignInPressed =() =>{
    // validate user
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed =() =>{
    navigation.navigate('ForgotPassword')
  };
  const onSignUpPress =()=>{
    navigation.navigate('SignUp')
  };
  return (
    <View style={styles.root}>
     <Image source={Logo} style={[styles.logo , {height: height * 0.3}]} resizeMode="contain" />

     <CustomInput
          name="username"
          placeholder="Username"
          value={username}
          setValue={setusername}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          value={password}
          setValue={setpassword}
        />

        <CustomButton text="Sign In" onPress={onSignInPressed}/>

        <CustomButton 
        text="Forgot password" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"/>

       <SocialSignInButtons />

        <CustomButton 
        text="Don't have an account? Create one" 
        onPress={onSignUpPress} 
        type="TERTIARY"/>
    </View>
  );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
    },
    logo:{
       width: '70%',
       maxWidth: 300,
       height: 200,
    },
});

export default SignInScreen