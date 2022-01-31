

import React, { useState } from "react";
import { Text,View,ScrollView, ImageBackground,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
import { Icon, Input, Button} from "react-native-elements";


const ResetPassword= ({navigation}) => {
    const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);

  const changePasswordViewState = () => {
    setIsPasswordVisibility(!isPasswordVisibility);
  };

  const PassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePasswordViewState()}
    >
      {isPasswordVisibility ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );
    return (
       
      

        <ScrollView style ={{flex:1}}
        showsVerticalScrollIndicator={false}>
              <ImageBackground style = {
            { flex: 1 }
        }
        source = {
            {
                uri: 'https://i.pinimg.com/564x/7e/29/d4/7e29d4d7a937ba5d79126c2f95576438.jpg',
            }
        }></ImageBackground> 
          
            {/* bottom view */}
            <View style={styles.container}>
                <View style = {{padding:40}}>
              {/* FORM */}
              <View style={styles.Text}>
     
   </View>
   <View>
     <Text
       style={{paddingTop:"50",
         fontWeight: "300",
         color: "#3b3c3d",
        
       }}
     >   
          <Text>Password Reset</Text>
       Worry not, we got you.
       
     </Text>
   </View>

              <View style={styles.inputContainer}>
            <Input
              placeholder="verification code"
              style={styles.input}
              leftIcon={<Icon name="sort-numeric-asc" type="font-awesome" />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="new password"
              style={styles.input}
              leftIcon={<Icon name="lock" type="font-awesome" />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="confirm new password"
              style={styles.input}
              leftIcon={<Icon name="lock" type="font-awesome" />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>
          </View>

          

          {/* button */}
          <View style={{
              height:100,
              justifyContent:'center',
              alignItems:'center',
          }}>

<Button
                    onPress={() => navigation.navigate('DashBoard')}
                      title="Reset"
                      containerStyle={{
                        marginTop: 10,
                        borderRadius: 15,
                        width:150,
                      }}
                      buttonStyle={{
                        backgroundColor: '#8B9B71'
                      }}
                      titleStyle={{
                        color:'#FFE8E8'
                      }}
                    
                    />

          </View>

          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            height:100,
          }}
        >
          
        </View>

                
              </View>

         
          

        </ScrollView>

    )
}
export default ResetPassword

const styles = StyleSheet.create({
container:{flex:1.5,
backgroundColor:'#4F4848',
bottom:50,
borderTopStartRadius:30,
borderTopEndRadius:30,


},
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
SignIn:{
alignItems:'center',
backgroundColor:'#f5eade',
width:100,
justifyContent:'center',
fontSize:30,

},


})