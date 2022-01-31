import * as React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
//import colors from '../../consts/colors';

const CheckOut = ({ navigation }) => {
  return (
    <View>

     <View style={{backgroundColor:`#696969`,borderRadius: 50, height:400, width:400}}>
         <Text style ={{color:'white',fontSize:20}}>Date:</Text>
         <Text style ={{color:'white',fontSize:15}}>22 Nov 2022 - 30 Nov 2022</Text>
         <Text style ={{color:'white',fontSize:20}}>No of People:</Text>
         <Text style ={{color:'white',fontSize:15}}>2</Text>
    
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Proceed to Payment")}
        activeOpacity={0.7}
      >
        <Text>Proceed to payment</Text>
      </TouchableOpacity>

      <Button
               
              
              
              />
      
     
    </View>
    
             
  );
};
export default CheckOut;

// const styles = StyleSheet.create({
//   container: {

//       backgroundColor: "black",
//       //bottom: 140,
//       borderBottomStartRadius: 30,
//       borderBottomEndRadius: 30,
//     },
// })
