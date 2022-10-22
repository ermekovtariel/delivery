import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const RestaurantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image
        source={{
          uri: imageUrl,
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>RestaurantCard</Text>
        <View>
          <Text className='text-sm text-gray-500'>
            <Text className='text-green-500'>Rating: {rating}</Text> - {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <Text className='test-xs text-gray-500'>Location:</Text>
          <Text className='test-xs text-gray-500'>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
