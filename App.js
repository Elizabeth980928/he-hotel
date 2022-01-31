
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
  Navigation
} from "react-native";
import { Button } from "react-native-paper";
// import colors from '../colors';
import MapView from 'react-native-maps'

import signIn from './components/signIn/signIn';
import getStarted from './components/getStarted/getStarted';
import signup from './components/signUp/signUp';
// import ForgotPassword from './components/ForgotPassword/forgotPassword';
import mainContainer from './navigation/screens/MainContainer';
import HistoryScreen from "./navigation/screens/HistoryScreen";
import BookingsScreen from "./navigation/screens/BookingsScreen";
import ProfileScreen from "./navigation/screens/ProfileScreen";
import DetailsScreen from "./src/views/screens/DetailsScreen";
import CheckOut from  "./src/views/screens/CheckOut";
import Map from './src/views/screens/Map';
import Payment from './src/views/screens/Payment';


import colors from './components/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Receipt from "./components/Receipt";
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName = { 'getStarted' } screenOptions={{headerShown:false}}>
   <Stack.Screen name = { 'getStarted' } component={getStarted}/>
   <Stack.Screen name = { 'signIn' } component={signIn}/>
   <Stack.Screen name = { 'SignUp' } component={signup}/>
   {/* <Stack.Screen name = { 'ForgotPassword' } component={ForgotPassword}/> */}
   <Stack.Screen name = { 'MainContainer' } component={mainContainer}/>
   <Stack.Screen name = { 'BookingsScreen' } component={BookingsScreen}/>
   <Stack.Screen name = { 'HistoryScreen' } component={HistoryScreen}/>
   <Stack.Screen name = { 'ProfileScreen' } component={ProfileScreen}/>
   <Stack.Screen name = { 'DetailsScreen' } component={DetailsScreen}/>
   <Stack.Screen name ={ 'CheckOut' } component={CheckOut}/>
   <Stack.Screen name = { 'Map' } component={Map}/>
   <Stack.Screen name ={ 'Payment' } component={Payment}/>
   <Stack.Screen name ={ 'Receipt' } component={Receipt}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: 50,
    fontStyle: "italic",
  },
   textStyle: { fontSize: 20, color: colors.grey, fontStyle: "italic" },
});
export default App;



// import React, {Component} from 'react';
// import {
//   View,
//   UIManager,
//   StyleSheet,
// } from 'react-native';

// import {LogBox} from 'react-native';

// LogBox.ignoreWarnings(['Warning: ...']);

// UIManager.setLayoutAnimationEnabledExperimental(true);

// import{ CreditCardInput } from 'react-native-credit-card-input';

// export default class App extends Component {
//   _onFocus = field => console.log('focusing', field)

//   _onChange = formData => console.log(JSON.stringify(formData, null , ' '))
//   render() {
//     return (
//       <View style={styles.container}>
//         <CreditCardInput
//           autoFocus
//           requireName={true}
//           requireCVC={true}
//           requirePostalCode={true}
//           validColor="black"
//           invalidColor="red"
//           placeholderColor="grey"
//           labelStyle={{color: 'black', fontSize: 12}}
//           inputStyle={{color: 'black', fontSize: 16}}
//           onFocus={this._onFocus}
//           onChange={this._onChange}
//         />
//       </View>
//     );
//   }
  
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 5,
//     backgroundColor: 'white',
//   },
// });


//Map
// import React, { useState } from "react";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// export default function Map() {
//   const [dark, setDark] = useState(false);
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         customMapStyle={dark ? mapStyle : null}
//       >
//         <TouchableOpacity
//           onPress={() => setDark(!dark)}
//           style={{
//             backgroundColor: "#FFF",
//             height: 30,
//             borderRadius: 15,
//             width: 30,
//             alignItems: "center",
//             justifyContent: "center",
//             position: "absolute",
//             marginTop: 60,
//             alignSelf: "flex-end",
//             right: 20,
//           }}
//         >
//           <FontAwesome name="adjust" size={30} />
//         </TouchableOpacity>
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

// const mapStyle = [
//   {
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         saturation: -5,
//       },
//       {
//         lightness: -5,
//       },
//     ],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#9E9E9E",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.locality",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#BDBDBD",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "poi.business",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#181818",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#1B1B1B",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#2C2C2C",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#8A8A8A",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#373737",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#3C3C3C",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway.controlled_access",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#4E4E4E",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#3D3D3D",
//       },
//     ],
//   },
// ];


