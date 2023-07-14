import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const PhotoScreen = ({route}) => {
  const {photo} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.urls.full}} style={styles.photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});

export default PhotoScreen;
