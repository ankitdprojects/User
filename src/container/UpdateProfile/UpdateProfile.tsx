import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { Polygon, Svg } from 'react-native-svg';
import ImageCropPicker from 'react-native-image-crop-picker';
import { PlusIcon } from '../../assets/SvgImage';

const UpdateProfile = ({ navigation }:any) => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState("");
  const points = Array  .from({ length: 10 }, (_, i) => {
    const angle = (i * 36 * Math.PI) / 180;
    const x = 200 / 2 + 150 / 2 * Math.cos(angle);
    const y = 200 / 2 + 150 / 2 * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');
  const handleOpenPicker = () => {
  ImageCropPicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    setImage(image?.path);
  });
}
const handleSave = () => {
  navigation.navigate('Home', { 
    name: name, 
    occupation: occupation, 
    website: website, 
    image: image 
  });
};

  
  return (
    <SafeAreaView style={styles.ComponentContainer}>
    <ScrollView contentContainerStyle={styles.ComponentContainer}>
    <KeyboardAvoidingView 
    style={{flex: 1}} 
    behavior={Platform.OS === 'ios' ? 'padding' : ''}>
    <View style={styles.Container}>
     <View style={styles.InputContainer}>
     <View style={styles.ImageContainer}>
            <View style={styles.Decagonal}>
          <Svg height={200} width={200}>
            <Polygon points={points} fill="none" stroke={"black"} strokeWidth={5} />
          </Svg>
          </View>
          {image ? (
                <Image source={{ uri: image }} style={styles.PickedImage} />
              ) : (
                <Image source={require('../../assets/png/ProfileImage.png')} style={styles.Img} />
              )}
            <TouchableOpacity onPress={() => handleOpenPicker()} style={styles.PlusIcon}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
       <Text style={styles.Lable}>Name</Text>
      <View style={styles.Border}>
       
    <TextInput
      placeholder="Name"
      value={name}
      onChangeText={(text) => setName(text)}
      style={styles.TextInput}
      placeholderTextColor={"black"}
    />
    </View>
    <Text style={styles.Lable}>Occupation</Text>
    <View style={styles.Border}>
    <TextInput
      placeholder="Occupation"
      value={occupation}
      onChangeText={(text) => setOccupation(text)}
      style={styles.TextInput}
      placeholderTextColor={"black"}
    />
    </View>
      <Text style={styles.Lable}>Website</Text>
      <View style={styles.Border}>
    <TextInput
      placeholder="Website"
      value={website}
      onChangeText={(text) => setWebsite(text)}
      style={styles.TextInput}
      placeholderTextColor={"black"}
    />
    </View>
    </View>
    <TouchableOpacity onPress={() => handleSave()} style={styles.Btn}>
      <Text style={styles.BtnTxt}>Save</Text>
    </TouchableOpacity>
  </View>
  </KeyboardAvoidingView>
  </ScrollView>
  </SafeAreaView>
  )
}

export default UpdateProfile