import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import FlipCard from "react-native-flip-card";

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  console.log(item.ingredients);
  return (
    <FlipCard
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    >
      <View>
        <View style={styles.container} key={index}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.header}>{item.foodName}</Text>
          <Text style={styles.body}>{item.description}</Text>
        </View>
        <View
          style={{
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{item.info}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Ingredients:</Text>
        {item.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.body}>
            - {ingredient}
          </Text>
        ))}

        <Text style={styles.header}>Tags:</Text>
        {item.tags.map((tag, index) => (
          <Text key={index} style={styles.body}>
            - {tag}
          </Text>
        ))}
      </View>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f7fb",
    borderRadius: 8,
    width: 270,
    height: 500,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 270,
    height: 270,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
