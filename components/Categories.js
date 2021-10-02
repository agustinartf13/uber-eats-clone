import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Categories() {
  const items = [
    {
      images: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      images: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      images: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      images: require("../assets/images/deals.png"),
      text: "Deals",
    },
    {
      images: require("../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      images: require("../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

  return (
    <View style={{ marginTop: 5, backgroundColor: '#fff', paddingVertical: 10, paddingLeft: 20, }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.images}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
