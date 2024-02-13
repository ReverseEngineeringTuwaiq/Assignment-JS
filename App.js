import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>

    <View style={styles.imageContainer}>
      <Image source={require('./Photo/leftarrow.png')} style={styles.image} />
      <Image source={require('./Photo/logout.png')} style={styles.image} />
    </View>

    <View>
    <Image source={require('./Photo/ManPic.png')} style={{ width: 100, height: 100, alignSelf: 'center', justifyContent: 'center' }} />
    <Text style={{fontWeight: "bold", fontSize: 20, alignSelf: "center"}}>John Grey</Text>
    <Text style={{alignSelf: 'center' }}>johngrey@example.com</Text>
    </View>
  
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, margin: 10,}}>
    <View style={styles.squareColor}>
    <Image source={require('./Photo/smileicon.png')} style={{width: 20, height: 20, margin: 10, alignSelf: "center",}}/>   
    <Text style={{alignSelf: "center"}}>Oily Skin</Text>
    </View>
    <View style={styles.squareColor}>
    <Image source={require('./Photo/heart.png')} style={{width: 20, height: 20, margin: 10, alignSelf: "center",}}/>   
    <Text style={{alignSelf: "center"}}>Favorite</Text>
    </View>
    <View style={styles.squareColor}>
    <Image source={require('./Photo/map.png')} style={{width: 20, height: 20, margin: 10, alignSelf: "center",}}/>   
    <Text style={{alignSelf: "center"}}>Track</Text>
    </View>
    </View>

    <View style={styles.separator}></View>

    <View>
  <View style={styles.CirculColor}>
    <View style={styles.contentContainer}>
      <Image source={require('./Photo/person.png')} style={styles.icon}/>   
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Username</Text>
        <Text style={{color: 'grey',}}>@johngrey41</Text>
      </View>
      <Image source={require('./Photo/arrow.png')} style={styles.arrowIcon}/>  
    </View>
  </View>

  <View style={styles.CirculColor}>
    <View style={styles.contentContainer}>
      <Image source={require('./Photo/notification.png')} style={styles.icon}/>   
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Notification</Text>
        <Text style={{color: 'grey',}}>Mute, Push, Email</Text>
      </View>
      <Image source={require('./Photo/arrow.png')} style={styles.arrowIcon}/>  
    </View>
  </View>

  <View style={styles.CirculColor}>
    <View style={styles.contentContainer}>
      <Image source={require('./Photo/settings.png')} style={styles.icon}/>   
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Settings</Text>
        <Text style={{color: 'grey',}}>Security, Privacy</Text>
      </View>
      <Image source={require('./Photo/arrow.png')} style={styles.arrowIcon}/>  
    </View>
  </View>
</View>
<View>
  <View style={styles.separator}></View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 10 }}>
    <View style={styles.itemContainer}>
      <Image source={require('./Photo/Home.png')} style={styles.icon}/>   
      <Text style={styles.boldText}>Home</Text>
    </View>
    <View style={styles.itemContainer}>
      <Image source={require('./Photo/shop.png')} style={styles.icon}/>   
      <Text style={styles.boldText}>Shop</Text>
    </View>
    <View style={styles.itemContainer}>
      <Image source={require('./Photo/chat.png')} style={styles.icon}/>  
      <Text style={styles.boldText}>Chat</Text> 
    </View>
    <View style={styles.itemContainer}>
      <Image source={require('./Photo/person.png')} style={styles.icon}/>   
      <Text style={styles.boldText}>Profile</Text>
    </View>
  </View>
</View>

  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: -20,
  },
  squareColor: {
    width: 80,
    height: 65,
    backgroundColor: '#98ffa8',
    borderRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%', 
    marginVertical: 10, 
  },
  CirculColor: {
    backgroundColor: '#ddffe2',
    borderRadius: 300,
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 20,
  },
});
