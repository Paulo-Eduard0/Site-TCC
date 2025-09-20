import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { TabRouter } from '@react-navigation/native';
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');

const Drawer = createDrawerNavigator();

export default function HomeAluno() {

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('../minhasR'); 
    }
  };


  const handleProfilePress = () => {
    router.push('../minhasR');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
     
      <View style={styles.background} />
      
    
      <View style={styles.container}>
  
        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        {/* TouchableOpacity com onPress para navegar */}
        <TouchableOpacity 
          style={styles.profileContainer}
          onPress={handleProfilePress} // Adicione esta linha
        >
          <Image source={profile} style={styles.setaImage} />
        </TouchableOpacity>

        {/* Título "Login Aluno" */}
        <View style={styles.login}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>BrainBoost</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
  background: {
    position: 'absolute',
    top: 0,
    left: -50, 
    right: -50, 
    height: 100, 
    backgroundColor: '#000428',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  drawerToggleContainer: {
    position: 'absolute',
    top: 7,
    left: 18,
    marginTop: 40,
    zIndex: 1,
    transform: [{ scale: 1.5 }],
  },
  
  profileContainer: {
    position: 'absolute',
    top: 7,
    right: 30,
    marginTop: 40,
    zIndex: 1,
  },
  
  setaImage: {
    width: 40,
    height: 40,
  },
  login: {
    width: windowWidth * 0.5,
    maxWidth: 500,
    aspectRatio: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000428',
    marginTop: 40,
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 90, 
  },
  label: {
    color: '#000428', 
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ou: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
   
  },
  cadastro: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: '#000428',
  },
  buttonGoogle: {
    color: '#000428',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'tranparent',
  },
  botaoG:{
     backgroundColor: 'transparent',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#000428',
  },
  brain:{
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
  }
});