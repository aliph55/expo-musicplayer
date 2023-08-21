import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";

const AlbumCover = ({ albumCover }) => {
  const { width } = useWindowDimensions();

  const maxWidth = width * 0.9;

  return (
    <View style={{ margin: 10, alignItems: "center" }}>
      <Image
        source={{ uri: albumCover }}
        alt=""
        resizeMode="stretch"
        style={{ width: maxWidth, height: 300, borderRadius: 5 }}
      />
    </View>
  );
};

export default AlbumCover;

const styles = StyleSheet.create({});
