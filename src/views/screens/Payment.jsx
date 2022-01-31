import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { Checkbox } from "react-native-paper";
import colors from "../../../src/consts/colors";

const Payment = ({ navigation }) => {
  const [checked, setChecked] = React.useState(true);

  const handleCheckBox = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
    <View style={{flexDirection:'row', paddingLeft:30}}>
      
      <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />

                <Text style={{paddingLeft:250}}>Elizabeth</Text>

           
    </View>

      <View style={{ width: "100%", height: 250 }}></View>
      {/* Top View */}

      {/* <View style={styles.container}>
     <Text style={styles.textStyle  }>How do you want pay?</Text>
     </View> */}

      {/* bottom view */}
      <View style={styles.container}>
        {/* <View style={{ padding: 40 }}> */}
        <>
          {/* FORM */}

          <View
            style={{
              flexDirection: "row",
              height: 100,
              width: "100%",
              paddingTop: 20,
              paddingHorizontal: 50,
              justifyContent: "space-between",
            }}
          >
            <Image
              source={require("../../assets/paypal.png")}
              style={styles.image}
              resizeMode="cover"
            />

            <Image
              source={require("../../assets/mastercard.png")}
              style={styles.image}
              resizeMode="cover"
            />

            <Image
              source={require("../../assets/visa.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={{ marginTop: 50 }}>
            <View style={styles.pic1}></View>

            <View style={styles.inputContainer}>
              <Input placeholder="cardholder's name  *" style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
              <Input
                placeholder="card Number  *"
                style={styles.input}
                // leftIcon={<Icon name="credit-card" type="font-awesome" />}
              />
            </View>

            <View style={styles.inputContainer}>
              <Input placeholder="Expiration Date  *" style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
              <Input
                placeholder="CVC *"
                style={styles.input}
                //leftIcon={<Icon name="credit-card" type="font-awesome" />}
              />
            </View>
            <Text style={{paddingLeft:10,color:'grey'}}>Save card for future purchases</Text>
            <View style={{ flexDirection: "row" }}>
              <Checkbox
                status={checked}
                checked={checked}
                onPress={handleCheckBox}
              />

             
            </View>


            {/* button */}
            <View
              style={{
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onPress={() => navigation.navigate("Receipt")}
                title="Proceed"
                containerStyle={{
                  marginBottom: 60,
                  borderRadius: 15,
                  width: 150,
                }}
                buttonStyle={{
                  backgroundColor: "#BB44A8",
                }}
                titleStyle={{
                  color: "#FFE8E8",
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                height: 100,
              }}
            ></View>
          </View>
        </>
      </View>
    </View>
  );
};
export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "white",
    height: "100%",
    bottom: 140,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  SignUp: {
    alignItems: "center",
    backgroundColor: "#f5eade",
    width: 100,
    justifyContent: "center",
    fontSize: 30,
  },

  textStyle: {
    fontSize: 30,
    lineHeight: 43,
    paddingTop: 1,
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  
});
