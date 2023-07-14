import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import axios from 'axios';

const GalleryList = ({navigation}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos', {
        params: {
          client_id:
            '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
          per_page: 10,
        },
      })
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        Alert.alert(error.message)
        console.error(error);
      });
  }, []);

  const renderPhotoItem = ({item}) => (
    <TouchableOpacity
      style={styles.photoItem}
      onPress={() => navigation.navigate('Photo', {photo: item})}>
      <Image source={{uri: item.urls.small}} style={styles.thumbnail} />
      <View style={styles.photoInfo}>
        <Text style={styles.author}>{item.user.name}</Text>
        <Text style={styles.title}>{item.alt_description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={photos}
      renderItem={renderPhotoItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  photoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  photoInfo: {
    flex: 1,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default GalleryList;
