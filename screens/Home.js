import React, {useEffect} from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "R5FdI5Kh2PAEC1v_rJKeB795LwPaT85EJlsAWwSmWHqOmJlaLyjnN1uApCRgPurzeFNS1M9evr1s61w6WrAJoA-iNE3IIi2NC05yKqLTBqwk3EuMRLoMk9ufMIFWYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywoodgit";

    const apiOptions = {
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [])

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white", padding: 15, zIndex: 100 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
