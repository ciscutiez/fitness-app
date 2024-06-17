import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getBodyPart } from '../api/exerciseDB';
import { demoExercise } from '../constants';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, [item]);

  const getExercises = async (bodypart) => {
    const data = await getBodyPart(bodypart);
    setExercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style='light' />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className='rounded-b-[40px]'
      />
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        className='bg-rose-500 absolute mx-4 rounded-full flex justify-center pr-1 items-center'
      >
        <Ionicons name='caret-back-outline' size={hp(4)} color='white' />
      </TouchableOpacity>
      <View className='mx-4 space-y-3 mt-4'>
        <Text
          style={{ fontSize: hp(3) }}
          className='font-semibold capitalize text-neutral-700'
        >
          {item.name} exercises
        </Text>
        <View className='mb-10'>
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
