/*import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const splashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://i.pinimg.com/564x/7e/29/d4/7e29d4d7a937ba5d79126c2f95576438.jpg",
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            H&E{" "}
          </Text>{" "}
            
          <View style={styles.ButtonsView}>
            <TouchableOpacity  onPress={() => navigation.navigate('getStarted')} style={styles.Buttons}><Text style={styles.ButtonText}>getStarted </Text></TouchableOpacity>
          </View>
         
        </View>{" "}
      </ImageBackground>{" "}
    </SafeAreaView>
  );
};
export default splashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    padding: 150,
    color: "white",
    fontWeight: "italics",
    textAlign: "justify",
  },
  contentCenter: {
    justifyContent: "justify",
    alignItems: "justify",
  },
  textStyle: {
    color: "white",
    padding: 100,
    paddingBottom:1000
  },
  ButtonsView:{
    width:50,
    height:30,
    backgroundColor:'white',
    paddingTop:50,
    marginTop: 400,
    borderRadius: 15,
    width:100,
    backgroundColor: '#8B9B71',
    color:'#FFE8E8'
  }
});
*/

// import React, { useState } from "react";
// import { Text,View,ScrollView, ImageBackground,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
// import { Icon, Input, Button} from "react-native-elements";


// const signUp = ({navigation}) => {
//     const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);

//   const changePasswordViewState = () => {
//     setIsPasswordVisibility(!isPasswordVisibility);
//   };

//   const PassWordViewState = () => (
//     <TouchableOpacity
//       activeOpacity={0.7}
//       onPress={() => changePasswordViewState()}
//     >
//       {isPasswordVisibility ? (
//         <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
//       ) : (
//         <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
//       )}
//     </TouchableOpacity>
//   );
//     return (


//         <ScrollView style ={{flex:1,backgroundColor:'#ffffff'}}
//         showsVerticalScrollIndicator={false}>
//            <ImageBackground style = {
//             { flex: 1 }
//         }
//         source = {
//             {
//                 uri: 'https://i.pinimg.com/564x/7e/29/d4/7e29d4d7a937ba5d79126c2f95576438.jpg',
//             }
//         }></ImageBackground> 
          
//             {/* bottom view */}
//             <View style={styles.bottomview}>
//                 <View style = {{padding:40}}>
//               {/* FORM */}
//               <View style={{marginTop:50}}>

//               <h1>Sign Up</h1>

//               <View style={styles.inputContainer}>
//             <Input
//               placeholder="Username"
//               style={styles.input}
//               leftIcon={<Icon name="user" type="font-awesome" />}
//               secureTextEntry={isPasswordVisibility}
//             />
//           </View>
//               <View style={styles.inputContainer}>
//             <Input
//               placeholder="Email"
//               style={styles.input}
//               leftIcon={<Icon name="envelope-o" type="font-awesome" />}
//             />
//               </View>

//           <View style={styles.inputContainer}>
//             <Input
//               placeholder="Password"
//               style={styles.input}
//               leftIcon={<Icon name="lock" type="font-awesome" />}
//               secureTextEntry={isPasswordVisibility}
//             />
//           </View>

//           <View style={styles.inputContainer}>
//             <Input
//               placeholder="Confirm Password"
//               style={styles.input}
//               leftIcon={<Icon name="lock" type="font-awesome" />}
//               secureTextEntry={isPasswordVisibility}
//             />
//           </View>


//           {/* button */}
//           <View style={{
//               height:100,
//               justifyContent:'center',
//               alignItems:'center',
//           }}>

// <Button
//                     onPress={() => navigation.navigate('DashBoard')}
//                       title="Sign In"
//                       containerStyle={{
//                         marginTop: 10,
//                         borderRadius: 15,
//                         width:150,
//                       }}
//                       buttonStyle={{
//                         backgroundColor: '#8B9B71'
//                       }}
//                       titleStyle={{
//                         color:'#FFE8E8'
//                       }}
                    
//                     />

//           </View>

//           <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             height:100,
//           }}
//         >
          
//         </View>

                
//               </View>


//             </View>

//             </View>

//         </ScrollView>

//     )
// }
// export default signUp

// const styles = StyleSheet.create({
// bottomview:{flex:1.5,
// backgroundColor:'white',
// bottom:150,
// borderTopStartRadius:30,
// borderTopEndRadius:30,


// },
// signIn:{
// alignItems:'center',
// backgroundColor:'#f5eade',
// width:100,
// justifyContent:'center',
// fontSize:30,

// }

// })

