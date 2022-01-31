import React, { useState } from "react";
import { Text,View,ScrollView, ImageBackground,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
import { Icon, Input, Button} from "react-native-elements";


const ForgotPassword = ({navigation}) => {
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
        {/* <Image source={require("./assets/brown.jpeg")} style={styles.image} /> */}
             
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
          <Text>Forgot your password?</Text>
       Worry not, we got you.
       Enter your email and check 
       verification code .
     </Text>
   </View>

              <View style={styles.inputContainer}>
            <Input
              placeholder="Enter your email"
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
                    onPress={() => navigation.navigate('ResetPassword')}
                      title="Verification"
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
export default ForgotPassword

const styles = StyleSheet.create({
container:{flex:1.5,
backgroundColor: 'white',
bottom:50,
borderTopStartRadius:30,
borderTopEndRadius:30,


},
SignIn:{
alignItems:'center',
backgroundColor:'#f5eade',
width:100,
justifyContent:'center',
fontSize:30,
},
})


