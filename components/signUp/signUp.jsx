
import React, { useState } from "react";
import { Text,View,ScrollView, ImageBackground,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
import { Icon, Input, Button} from "react-native-elements";


const SignUp = ({navigation}) => {
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


      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{width:"100%",height:250}}>
        <Image
          source={require("../../assets/pic1.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

            {/* bottom view */}
            <View style={styles.container}>
                <View style = {{padding:40}}>
              {/* FORM */}
              <View style={{marginTop:50}}>
              <Text style={styles.textStyle}>Sign Up</Text>
              <View style={styles.inputContainer}>
            <Input
              placeholder="Username"
              style={styles.input}
              leftIcon={<Icon name="user" type="font-awesome" />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>
               
              <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              style={styles.input}
              leftIcon={<Icon name="envelope-o" type="font-awesome" />}
            />
              </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="Password"
              style={styles.input}
              leftIcon={<Icon name="lock" type="font-awesome" />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="Confirm Password"
              style={styles.input}
              leftIcon={<Icon name="lock" type="font-awesome" />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>


          {/* button */}
          <View style={{
              height:100,
              justifyContent:'center',
              alignItems:'center',
          }}>

<Button
                    onPress={() => navigation.navigate('MainContainer')}
                      title="Sign Up"
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


            </View>

            </View>

      </View>

    )
}
export default SignUp

const styles = StyleSheet.create({
 container:{flex:1.5,
backgroundColor:'white',
bottom:150,
borderBottomStartRadius:30,
borderBottomEndRadius:30,


},
SignUp:{
alignItems:'center',
backgroundColor:'#f5eade',
width:100,
justifyContent:'center',
fontSize:30,

},

textStyle: { 
  fontSize: 30,
  lineHeight:43,
  paddingTop:1,
  marginBottom:20
  
  },
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
   
  },

})


