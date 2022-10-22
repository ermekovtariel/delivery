import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Head */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location _</Text>
        </View>

        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-10 w-10 bg-gray-300 p-4 rounded-full'
        />
      </View>
      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 rounded space-x-2 bg-gray-200 p-3'>
          <Text className='text-gray-500'>SearchI</Text>
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <Text className='text-cyan-400'>Settings</Text>
      </View>
      {/* Body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id=''
          title='Featured'
          description='Paid placements from our partners'
        />
        <FeaturedRow
          id=''
          title='Tasty Discounts'
          description={`Everyone's been enjoing these juicy discounts!`}
        />
        <FeaturedRow
          id=''
          title='Offers near you!'
          description='Why not support your local restaurant tonight!'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
