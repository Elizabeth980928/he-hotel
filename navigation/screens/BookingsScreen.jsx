import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,Button
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");
import houses from "../../src/consts/houses";
import colors from "../../src/consts/colors";
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = ({ navigation }) => {
  const categoryList = ["All"];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

 

  
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}


      </View>
    );
  };



  const Card = ({ house }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", house)}
      >
        <View style={style.card}>
          {/* House image */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{ marginTop: 10 }}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Rome Suites
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.purple,
                  fontSize: 16,
                }}
              >
                R3,500
              </Text>
            </View>

            {/* Location text */}

            <Text style={{ color: colors.grey, fontSize: 14, marginTop: 5 }}>
              Polokwane Central
            </Text>

            {/* Facilities container */}
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


};

  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const changeSelectedDate = (event, selectedDate) => {
  const currentDate = selectedDate || mydate;
  setDate(currentDate);
  const [isDisplayDate, setShow] = useState(false);
 

 const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

const displayDatepicker = () => {
  showMode('date');
  setShow(true);
};

  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>
        <Text style={{ color: colors.dark, fontSize: 10, fontWeight: "bold" }}>
         Welcome Elizabeth
        </Text>
        <Image
          style={style.profileImage}
          source={require("../../src/assets/person.jpg")}
        />

       
      </View>

      <View>
          <Text style={{ paddingLeft: 20,color: colors.grey,fontSize:25,fontStyle: 'italic' }}>
            Find exclusive deals, and much more...
          </Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 100,
            paddingVertical: 0,
            paddingLeft: 20,
          }}
        >

        
          <View style={style.searchInputContainer}>
            <Icon name="search" color={colors.grey} size={25} />
            <TextInput placeholder=" Where to?  " />
          </View>

          {/*             
         
          <View style={style.mapBtn}>
            <Icon name="place" color={colors.black} size={25} />
          </View> */}

          <View style={style.sortBtn}>
            <Icon name="tune" color={colors.white} size={30} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            activeOpacity={0.7}
            style={{ padding: 10 }}
          >
            <Text
              style={{ textAlign: "left", fontStyle: "italic", color: "purple" }}
            >
              Choose on map
            </Text>
          </TouchableOpacity>
        </View>

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          horizontal
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
        />
      
      </ScrollView>

      <Button onPress={displayDatepicker} title="Show date" />
        
      {isDisplayDate ? 
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         :null}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    paddingRight: 40,
  },
  searchInputContainer: {
    height: 50,

    backgroundColor: colors.light,
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: colors.grey,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  mapBtn: {
    backgroundColor: colors.grey,
    height: 50,

    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  optionListsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: colors.grey,
  },
  activeCategoryListText: {
    color: colors.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: colors.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: colors.grey },
});
export default HomeScreen;
