import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Map() {
  let location ={
    latitude:23.259933,
    longitude:77.412613,
    latitudeDelta:0.009,
    longitudeDelta: 0.009
  }

  return (
    <View >
{/*   
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />
           
             */}
     <MapView
       
     style={[{height:'100%', width:'100%'}]}
      provider={PROVIDER_GOOGLE}
      mapType='hybrid'
      region={location}
  />
    </View>
  );
}



