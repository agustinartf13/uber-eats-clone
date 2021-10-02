import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Men Lari Beguling",
    image_url:
      "https://img.theculturetrip.com/wp-content/uploads/2018/06/oku.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
    time: '30-45 ~ min'
  },
  {
    name: "Men Sedu",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgv_uxutJu1NQR4p4NI1v3faByoxXZEqSveYcvNQaKxy7KUkAAP9Y3MhdQUdNIs0jnAKw&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.7,
    time: '30-45 ~ min'
  },
  {
    name: "Men Merta",
    image_url:
      "https://anakjajan.files.wordpress.com/2020/01/img_3611.jpg?w=672&h=372&crop=1",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.2,
    time: '30-45 ~ min'
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ paddingBottom: 150 }}>
      {props.restaurantData.map((restauran, index) => (
        <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={restauran.image_url} />
          <RestaurantInfo name={restauran.name} time={restauran.time} ratting={restauran.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      paddingHorizontal: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.time}</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{props.ratting}</Text>
    </View>
  </View>
);
