import React, { Component } from 'react';
import { Text, Button,View, TouchableOpacity, Alert, Image } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import {HomeStyles} from './Style';

export default class ImageUploadDownloadApp extends Component {
  state = {
    photo: null,
  };

 
// Function for uploading image
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
    
  };
 
  // Function for downloading image
  downloadImage = () => {
    var date = new Date();
    var image_URL = '';
    var ext:any = this.getExtention(image_URL);
    ext = "." + ext[0];
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + "/image_" + Math.floor(date.getTime()
          + date.getSeconds() / 2) + ext,
        description: 'Image'
      }
    }
    config(options).fetch('GET', image_URL).then((res) => {
      Alert.alert("Image Downloaded Successfully.");
    });
  }
 
  getExtention = (filename:any) => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
      undefined;
  }
 
 
  render() {
    const { photo }:any= this.state;
    return (
      <View style={HomeStyles.MainContainer}>
 
        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg' }}
          style={{ width: 300, height: 300, resizeMode: 'contain', margin: 5 }} />
 
        <TouchableOpacity style={HomeStyles.button} onPress={this.downloadImage} >
 
          <Text style={HomeStyles.text}>Click Here To Download Above Image</Text>
 
        </TouchableOpacity>

        <View style={HomeStyles.uploadContainer  }>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo for uploading" onPress={this.handleChoosePhoto} />
      </View>
 
      </View>
    );
  }
}