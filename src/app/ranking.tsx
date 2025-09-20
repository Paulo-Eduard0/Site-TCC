import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');

export default function Ranking() {
  
  

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background azul na parte superior */}
      <View style={styles.background} />
      
      {/* Container principal */}
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
                  <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        {/* Container da seta no canto superior esquerdo */}
        <TouchableOpacity style={styles.profileContainer} >
          <Image source={profile} style={styles.profileImage} />
        </TouchableOpacity>

        {/* Título "Login Aluno" */}
        <View style={styles.repertorio}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>Seu Ranking</Text>
        </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>1º User1</Text>
          </TouchableOpacity>

         
          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>2º User2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>3º User3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>4º User4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>4º User5</Text>
          </TouchableOpacity>


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
  
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 40,
    zIndex: 1, 
  },
  
  profileImage: {
    width: 30,
    height: 30,
  },
  repertorio: {
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
 
  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 200,
    top: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  brain:{
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
  },

  drawerToggleContainer: {
    position: 'absolute',
    top: 7,
    left: 18,
    marginTop: 40,
    zIndex: 1,
    transform: [{ scale: 1.5 }],
  },
});