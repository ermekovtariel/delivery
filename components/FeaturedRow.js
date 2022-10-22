import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title} </Text>
        <Text className='font-bold text-lg text-cyan-400'>{'>'} </Text>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description} </Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={1}
          imageUrl={'https://links.papareact.com/gn7'}
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imageUrl={'https://links.papareact.com/gn7'}
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imageUrl={'https://links.papareact.com/gn7'}
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imageUrl={'https://links.papareact.com/gn7'}
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
