  import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Animated } from 'react-native'
  import React, { useEffect, useRef, useState } from 'react'
  import { styles } from './styles'
  import Header from '../../components/header/Header'
  import { Polygon, Svg } from 'react-native-svg'
  import {  HomeIcon, UpIcon } from '../../assets/SvgImage'
  import HorizontalLineWithDecagon from '../../components/HorizontalDectagonal/HorizontalDectagonal'

  const Home = ({route}:any) => {
    const name = route?.params?.name;
    const occupation = route?.params?.occupation;
    const website = route?.params?.website;
    const image= route?.params?.image
    const storyImage= route?.params?.storyImage
    const newsText= route?.params?.newsText
    const screen= route?.params?.screen
      const [modalVisible, setModalVisible] = useState(false);
      const [largeImageModalVisible, setLargeImageModalVisible] = useState(false);
      const animatingProgressBar = useRef(new Animated.Value(0));
      const [animDelay, setAnimDelay] = useState(0);
      const [animDuration, setAnimDuration] = useState(5000);
    const [count, setCount] = useState(0)
      const handleLongPress = () => {
          setLargeImageModalVisible(true)
      };
      const points = Array.from({ length: 10 }, (_, i) => {
          const angle = (i * 36 * Math.PI) / 180;
          const x = 200 / 2 + 150 / 2 * Math.cos(angle);
          const y = 200 / 2 + 150 / 2 * Math.sin(angle);
          return `${x},${y}`;
        }).join(' ');
        const handleModal = () => {
          if (route?.params?.screen === 'Story') {
            setModalVisible(true);
            const interval = setInterval(() => {
              setCount((prevCount) => prevCount + 1);
            }, 1000); // 1000 milliseconds = 1 second
        
            const timer = setTimeout(() => {
              setModalVisible(false);
              setCount(0);
              clearInterval(interval); // Clear the interval
            }, 5000);
        
            return () => {
              clearTimeout(timer); // Clear the timeout
              clearInterval(interval); // Clear the interval in the cleanup function
            };
          }
        };
     
      console.log(count,"count")

        const minWidthValue = 5.4;
        const progress = count;
        const total = 5;
      
        const percentage = total && progress ? Math.min(progress, total) / total : 0;

        const minDisplayWidth =
          percentage > 0 && percentage < minWidthValue ? minWidthValue : percentage;
        const progressingBarWidthPercentage = `${Math.max(
          minDisplayWidth,
          Math.floor(percentage * 100)
        )}%`; 
      
  useEffect(() => {
    Animated.timing(animatingProgressBar.current, {
      toValue: percentage,
      delay: animDelay,
      duration: animDuration,
      useNativeDriver: false,
    }).start()
  }, [percentage, count]
  );


      
      return (
          <SafeAreaView style={styles.Container}>
              <ScrollView contentContainerStyle={styles.Container}>
          
              <View>
          <Header />
          </View>
          <View style={styles.ImgTxtContainer}>
          <TouchableOpacity onPress={() => {handleModal()}}>
          
            <View style={styles.ImageContainer}>
              <View style={styles.Decagonal}>
            <Svg height={200} width={200}>
              <Polygon points={points} fill="none" stroke={screen ==="Story"? "#f5da42": "black" } strokeWidth={5} />
            </Svg>
            </View>

              {image ? (
                <TouchableOpacity onPress={() => handleModal()} onLongPress={() => handleLongPress()}>
              <Image source={{ uri: image }} style={styles.PickedImage} />
              </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handleModal()} onLongPress={() => handleLongPress()}>
                <Image source={require('../../assets/png/ProfileImage.png')} style={styles.Img} />
                </TouchableOpacity>
              )}
              
            </View>
            </TouchableOpacity>
            <View style={styles.TxtContainer}>
              <View>
                  <Text style={styles.Head}>{name?? "Random Name"}</Text>
                <View style={styles.ParaTxtContainer}>
                  <Text style={styles.ParaTxt}>{occupation ?? "Random Occupation"}</Text>
                  <Text style={styles.WebsitePara}>{website ?? "Random Website"}</Text>
                  </View>
              </View>
            </View>
            </View>
          <View>
              <View style={styles.DecagonalWithLine}>
          <HorizontalLineWithDecagon
              lineLength={300}
              lineWidth={2}
              lineColor="#f5da42"
              decagonSize={20}
              decagonColor="#f5da42"
            />
          </View>
        
          </View>
      {/* Story Modal */}
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
               <View style={styles.progressBar}>
               <Animated.View        
        style={[
          styles.progressBar,
          { borderRadius: 10 },
          {
            backgroundColor: "#f5da42",
            width: progressingBarWidthPercentage,
          },
          {
            transform: [
              {
                translateX: animatingProgressBar.current.interpolate({
                  inputRange: [1, 100],
                  outputRange: [0, 300],
                  extrapolate: "clamp"
                }),
              },
            ],
          },
        ]}
      />

</View>
              <View style={styles.CenteredView}>
                <View>
                  <Image source={{uri: storyImage}} style={styles.NewsImg}/>
                </View>
                <View>
                <Text style={styles.NewsTxt}>{newsText}</Text>
                </View>
              </View>
            </Modal>

            {/* Large Image Modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={largeImageModalVisible}
              onRequestClose={() => {
                setLargeImageModalVisible(!largeImageModalVisible);
              }}>
                <TouchableWithoutFeedback onPress={() => setLargeImageModalVisible(false)}>
              <View style={styles.ImageModalView}>
              {image ? (
                <TouchableOpacity >
              <Image source={{ uri: image }} style={styles.ImageModalHeight} />
              </TouchableOpacity>
              ) : (
                <TouchableOpacity >
                <Image source={require('../../assets/png/ProfileImage.png')} style={styles.ImageModalHeight} />
                </TouchableOpacity>
              )}
              </View>
              </TouchableWithoutFeedback>
            </Modal>
          </ScrollView>
          </SafeAreaView>
        )
  }

  export default Home