import { View, Text, TouchableOpacity, ScrollView  } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import {styles} from "../theme/index"
import TrendingMovies from "../components/trendingMovies"
import MovieList from '../components/movieList'
import { useNavigation } from '@react-navigation/native'

const ios = Platform.OS == 'ios';

export default function HomeScreen() {

    const [trending,setTrending] = useState([1,2,3])
    const [upcoming,setUpcoming] = useState([1,2,3])    
    const [topRated,setTopRated] = useState([1,2,3])  
    const navigation = useNavigation();




  return (
    <View className="flex-1 bg-neutral-800">
        {/* SEARCH BAR AND LOGO */}
      <SafeAreaView className={ios? "mb-2" : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
            <Text className="text-white text-3xl font-bold">
                <Text style={styles.text}>M</Text>ovies
                </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <MagnifyingGlassIcon size="30"  strokeWidth={2} color="white" />
            </TouchableOpacity>           
        </View>
      </SafeAreaView>

      <ScrollView showVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: 10}}
                  >
    
        {/* TRENDING MOVIES CAROUSEL */}
        <TrendingMovies data={trending}/>

        {/* UPCOMING MOVIES ROW*/}
        <MovieList title="Upcoming" data={upcoming}/>

         {/* TOP RATED MOVIES ROW*/}
         <MovieList title="Top Rated" data={topRated}/>
      </ScrollView>

    </View>
  )
}