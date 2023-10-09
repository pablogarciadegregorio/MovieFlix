import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import {styles}  from "../theme/index"
import { useNavigation } from '@react-navigation/native';

export default function MovieList({title,data, hideSeeAll}) {

    var {width, height} = Dimensions.get('window');

    let movieName = 'Antman and the Wasp Quantumania';
    const navigate = useNavigation();

  return (

      <View className="mb-8 space-y-4">
       <View className="mx-4 flex-row  justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {
            !hideSeeAll && ( <TouchableOpacity>
                <Text style={styles.text} className="text-lg">See All</Text>
            </TouchableOpacity>)
        }
       
       </View>
       <ScrollView
       horizontal 
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{paddingHorizontal: 15}}>

        {data.map((item,index) => {
            return(
                <TouchableWithoutFeedback
                key={index}
                onPress={()=> navigate.push('Movie', item)}>
                    <View className="space-y-1 mr-4">
                        <Image source={require('../assets/poster02.jpg')}
                        className="rounded-3xl"
                        style={{width:width*0.33, height: height*0.22}}>                           
                        </Image>
                        <Text className="text-neutral-300">
                            {
                            movieName.length>14? movieName.slice(0,14)+'...' : movieName
                            }
                        </Text>
                    </View>
                    
                </TouchableWithoutFeedback>
            )
        })
        }

       </ScrollView>
    </View>
  )
}