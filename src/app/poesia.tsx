import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');

export default function PoesiaModerna() {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.background} />
      
      <View style={styles.container}>

        <View style={styles.drawerToggleContainer}>
          <DrawerToggleButton tintColor='#6495ED'/>
        </View>
        
        <Link href="../perfilA" asChild>
          <TouchableOpacity style={styles.profileContainer} >
            <View style={styles.profilePlaceholder}>
              <Text style={styles.profileText}>👤</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <View style={styles.titulo}>
          <Text style={styles.textA}>Aluno</Text>
        </View>

        {/* Cards para cada item */}
        <View style={styles.card}>
          <Text style={styles.cardNumber}>1º</Text>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"A Rosa do Povo" (Carlos Drummond de Andrade):</Text> 
              Livro de engajamento social e político. Poemas como "Nosso Tempo" e "A Máquina do Mundo" refletem sobre a guerra, a injustiça e o papel do poeta.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>2º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Romanceiro da Inconfidência" (Cecília Meireles):</Text> 
             Poema épico que reconta a história da Inconfidência Mineira, focando nas figuras marginalizadas, especialmente na de Chica da Silva e nas mulheres.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>3º</Text>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Livro de Sonetos" (Vinicius de Moraes):</Text> 
               Aperfeiçoou a forma do soneto no Brasil, tratando de temas como o amor, a morte, a paixão e a brevidade da vida ("Soneto de Fidelidade").
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardNumber}>4º</Text>
            <View style={styles.divider} />
          </View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTitle}>"Os Cem Melhores Contos Brasileiros do Século" (Org. Ítalo Moriconi):</Text> 
             Antologia essencial para conhecer a diversidade da prosa de ficção nacional, de Machado a Clarice, de João Antônio a Dalton Trevisan.
          </Text>
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
  
  profileContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 40,
    zIndex: 1, 
  },
  
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
  
  
  card: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#000428',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000428',
    marginRight: 10,
  },
  
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  
  cardTitle: {
    fontWeight: 'bold',
    color: '#000428',
  },
  
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },

  textA: {
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
});