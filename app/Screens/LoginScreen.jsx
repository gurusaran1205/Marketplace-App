import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '@/hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import { ClerkProvider } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {

  useWarmUpBrowser();
  const router = useRouter();

  const {startOAuthFlow} = useOAuth({strategy: "oauth_google"});

  const onPress = React.useCallback(async () => {
    try{
      const { createdSessionId, signIn, signUp, setActive} = 
        await startOAuthFlow();

      if (createdSessionId){
       setActive({ session: createdSessionId});

       router.replace('/');
      } else {
        console.warn('No session was created.')
      }
      } catch (err){
        console.error("OAuth error", err);
      }
    }, [router, startOAuthFlow]);

  return (
    <View>
      <Image source={require('../../assets/images/login2.jpg')}
        className='w-full h-[400px] object-cover'/>
        <View className='p-10 bg-white mt-[-20px] rounded-t-3xl shadow-md'>
          <Text className='text-[30px] font-bold'>Community Marketplace</Text>
          <Text className='text-[18px] text-slate-500 mt-6'>Buy Sell Marketplace where you can sell old items and make real money</Text>
          <TouchableOpacity onPress={onPress} className='p-4 bg-purple-950 rounded-full mt-20'>
            <Text className='text-white text-center text-[18px]'> Get Started</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen