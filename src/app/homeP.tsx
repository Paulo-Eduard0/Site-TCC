import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');

export default function HomeProfessor () {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.background} />
      
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        <TouchableOpacity style={styles.profileContainer} >
          <Image source={profile} style={styles.profileImage} />
        </TouchableOpacity>

        <View style={styles.titulo}>
          <Text style={styles.text}>Professor</Text>
        </View>

        {/* ScrollView para permitir rolagem */}
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          {/* Caixa de Estatísticas */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Estatísticas da Turma</Text>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Turma:</Text>
              <Text style={styles.statsValue}>Matemática Avançada</Text>
            </View>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Média de notas:</Text>
              <Text style={styles.statsValue}>8.5</Text>
            </View>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Redações corrigidas:</Text>
              <Text style={styles.statsValue}>24</Text>
            </View>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Temas mais envolvidos:</Text>
              <Text style={styles.statsValue}>Álgebra, Geometria</Text>
            </View>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Alunos ativos:</Text>
              <Text style={styles.statsValue}>30</Text>
            </View>
          </View>

          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Últimas redações</Text>
            <Text style={styles.cardSubtitle}>Corrigidas</Text>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Nome:</Text>
              <Text style={styles.statsValue}>Paulo Freire</Text>
            </View>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Nota:</Text>
              <Text style={styles.statsValue}>1000/1000</Text>
            </View>
            
            <View style={styles.statsItem}>
              <Text style={styles.statsLabel}>Redações corrigidas:</Text>
              <Text style={styles.statsValue}>24</Text>
            </View>
            
            <Link href="../ranking" asChild>
              <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>Revisar</Text>
              </TouchableOpacity>
            </Link> 
          </View>

          
          <View style={styles.bottomSpacing} />
        </ScrollView>

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
  
 
  scrollView: {
    width: '100%',
    flex: 1,
  },
  
  scrollViewContent: {
    paddingBottom: 20, 
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
  
  titulo: {
    width: windowWidth * 0.5,
    maxWidth: 500,
    aspectRatio: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000428',
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  text: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    textAlign: 'center',
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

  // Estilos para os cards
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#000428',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000428',
    textAlign: 'center',
    marginBottom: 20,
  },

  cardSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000428',
    textAlign: 'center',
    marginBottom: 15,
  },
  
  statsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  
  statsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    flex: 1,
  },
  
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000428',
    flex: 1,
    textAlign: 'right',
  },

  button: {
    backgroundColor: '#000428',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  bottomSpacing: {
    height: 20, 
  },
});