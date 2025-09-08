import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";

const profile = require('../img/profile.png');

export default function MinhasRedações() {
  
  

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background azul na parte superior */}
      <View style={styles.background} />
      
      {/* Container principal */}
      <View style={styles.container}>
        
        {/* Container da seta no canto superior esquerdo */}
        <TouchableOpacity style={styles.profileContainer} >
          <Image source={profile} style={styles.profileImage} />
        </TouchableOpacity>

        {/* Título "Login Aluno" */}
        <View style={styles.repertorio}>
          <Text style={styles.text}>Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>Repertórios</Text>
        </View>

        <Link href="../repertorio" asChild>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Repertórios</Text>
          </TouchableOpacity>

        </Link>
         
          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>Minha Evolução</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>FlashCards</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
        
            <Text style={styles.buttonText}>Ranking</Text>
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
  // NOVO: Container para a seta no canto superior direito
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 40,
    zIndex: 1, // Garante que a seta fique acima de outros elementos
  },
  // NOVO: Estilo para a imagem da seta
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
  }
});