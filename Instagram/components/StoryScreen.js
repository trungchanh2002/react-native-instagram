import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function StoryScreen({ navigation }) {
   const [isPink, setIsPink] = useState(false);
   const [stories, setStories] = useState([]);
   const [id, setId] = useState(0);
   const [countdown, setCountdown] = useState(null);
   const totalDuration = 4000;

   useEffect(() => {
      const fetchStories = async () => {
         try {
            const response = await fetch('http://localhost:3000/stories');
            const data = await response.json();
            setStories(data);
         } catch (error) {
            console.error('Error fetching stories:', error);
         }
      };

      fetchStories();

      const interval = setInterval(() => {
         setCountdown((prevCountdown) => (prevCountdown === null || prevCountdown === 0 ? (setId((prevId) => (prevId + 1) % stories.length), totalDuration) : prevCountdown - 50));
      }, 50);

      return () => clearInterval(interval);
   }, [stories.length, countdown, id]);

   const handleLeftClick = () => {
      setId((prevId) => (prevId - 1 + stories.length) % stories.length);
      setCountdown(totalDuration);
   };

   const handleRightClick = () => {
      setId((prevId) => (prevId + 1) % stories.length);
      setCountdown(totalDuration);
   };

   const goBack = () => {
      navigation.goBack();
   };
   const handleShape = () => {
      setIsPink(!isPink);
   };

   return (
      <View style={styles.container}>
         {stories.length > 1 && (
            <View>
               {/* Image */}
               <Image style={{ width: '100%', height: 600, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} source={require(`../assets/${stories[id].image}`)} />
               {/* Time */}
               <View style={styles.timer}>
                  <View style={{ borderRadius: 5, width: `${100 - (countdown / totalDuration) * 100}%`, height: 5, backgroundColor: '#ccc' }} />
               </View>
               {/* User Info */}
               <View style={{ position: 'absolute', flexDirection: 'row', marginTop: 25, marginLeft: 10, alignItems: 'center' }}>
                  <Image style={{ width: 32, height: 32 }} source={require(`../assets/${stories[id].avatar}`)} />
                  <Text style={{ fontWeight: '600', fontSize: 15, color: 'white', marginLeft: 8 }}>{stories[id].username}</Text>
                  <Image style={{ width: 14, height: 14, marginLeft: 4 }} source={require('../assets/verified.png')} />
                  <Text style={{ fontSize: 15, color: '#DCDCDC', marginLeft: 10, fontWeight: '400' }}>{stories[id].time}</Text>
               </View>
               {/* View icon */}
               <View style={{ position: 'absolute', top: 25, right: 10, flexDirection: 'row' }}>
                  <AntDesign style={{ marginRight: 12 }} name="ellipsis1" size={26} color="white" />
                  <AntDesign onPress={goBack} name="close" size={26} color="white" />
               </View>
               {/* View left right */}
               <View style={{ position: 'absolute', top: 300, flexDirection: 'row', justifyContent: 'space-between', width: '100%', opacity: 0.5 }}>
                  <AntDesign onPress={handleLeftClick} name="left" size={30} color="white" />
                  <AntDesign onPress={handleRightClick} name="right" size={30} color="white" />
               </View>
               {/* <Text style={styles.countdownText}>{countdown}</Text> */}
               {/* View Input */}
               <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 12, alignItems: 'center', justifyContent: 'space-between' }}>
                  <TextInput style={{ borderWidth: 2, borderRadius: 15, color: 'white', borderColor: 'white', height: 38, width: 300, opacity: 0.8, paddingLeft: 10 }} placeholder="Send Message" />
                  <TouchableOpacity onPress={handleShape}>
                     <Image style={{ width: 24, height: 24 }} source={isPink ? require('../assets/shape-pink-icon.png') : require('../assets/shape-icon-white.png')} />
                  </TouchableOpacity>
                  <Image style={{ width: 24, height: 24 }} source={require('../assets/chat-white-icon.png')} />
               </View>
            </View>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'black',
   },
   timer: {
      marginTop: 10,
      width: '100%',
      position: 'absolute',
      paddingHorizontal: 10,
   },
   countdownText: {
      marginTop: 5,
      fontSize: 18,
   },
});
