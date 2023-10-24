import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import ImageCropPicker from 'react-native-image-crop-picker'

const Story = ({navigation}:any) => {
  const [addStory, setAddStory] = useState<boolean>(false)
  const [addImage, setAddImage] = useState<boolean>(false)
  const [textData, setTextData] = useState<string>("")
  const handleOpenPicker = () => {
    setAddStory(true)
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      if(image){
        setAddImage(image?.path);
      }else{
        setAddStory(false);   
      }
    }).catch(error => {
      setAddStory(false);
    });;
  }
  const handleSave = () => {
    navigation.navigate('Home',{ storyImage: addImage, newsText: textData, screen: "Story"});
  };

  return (
  
  
    <SafeAreaView style={styles.Container}>
    <ScrollView contentContainerStyle={styles.Container}>
  <View style={styles.Container}>
           <View style={styles.CenteredView}>
            {
              addStory ?
              (
                <View style={[ styles.Container, styles.CenterData, styles.WidthContainer]}>
                  <View style={[styles.WidthContainer, styles.CenterData,styles.Container]}>
               
                      {
                        addImage ?
<Image source={{uri: addImage}} style={styles.NewsImg}/>
:
null
                      }    
                
                <View style={styles.InputContainer}>
                <Text style={styles.Lable}>News in story</Text>
    <View style={styles.Border}>
    <TextInput
      placeholder="Add news in story"
      value={textData}
      onChangeText={(text) => setTextData(text)}
      style={styles.TextInput}
      placeholderTextColor={"white"}
    />
    </View>
                </View>
                </View>
               
                <TouchableOpacity onPress={() => handleSave()} style={styles.Btn}>
      <Text style={styles.BtnTxt}>Save</Text>
    </TouchableOpacity>
                
                </View>
              )
              :
              <TouchableOpacity onPress={() => handleOpenPicker()}>
                <Text style={styles.NewsTxt}>ADD STORY</Text>
              </TouchableOpacity>
            }
              
              </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Story