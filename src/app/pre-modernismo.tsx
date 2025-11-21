import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

const profile = require('../img/profile.png');

export default function PréModernismo() {
  
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

        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          
          <View style={styles.card}>
            <Text style={styles.cardNumber}>1º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Os Sertões" (Euclides da Cunha:)</Text> 
              Obra fundamental. Divide-se em "A Terra" (geografia), "O Homem" (o sertanejo) e "A Luta" (Guerra de Canudos). É um tratado sobre a formação do Brasil e o abismo entre o litoral "civilizado" e o sertão "bárbaro".
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>2º</Text>
              <View style={styles.divider} />
            </View>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Triste Fim de Policarpo Quaresma" (Lima Barreto):</Text> 
              Sátira ao nacionalismo ufanista. O major Quaresma é um visionário ingênuo que propõe mudanças absurdas para salvar o Brasil, encontrando apenas a incompreensão e a violência.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>3º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Clara dos Anjos" (Lima Barreto):</Text> 
              Romance inacabado que denuncia o racismo e a injustiça social. A personagem Clara, uma mulher negra e pobre, é seduzida e abandonada por um homem branco de classe alta.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardNumber}>4º</Text>
              <View style={styles.divider} />
            </View>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Macunaíma" (Mário de Andrade):</Text> 
              O "herói sem nenhum caráter". Rapsódia que busca criar uma identidade nacional mestiça, sincretista e contraditória, colando mitos e lendas de todo o Brasil.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>5º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Pauliceia Desvairada" (Mário de Andrade):</Text> 
             Marco da poesia modernista. Retrata a cidade de São Paulo em sua explosão urbana e caos, com o famoso poema "Ode ao Burguês".
            </Text> 
          </View>

          <View style={styles.card}>
            <Text style={styles.cardNumber}>6º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Serafim Ponte Grande" (Oswald de Andrade):</Text> 
             Radicaliza o experimentalismo. A história fragmentada de Serafim que quer "virar selvagem" critica a família, a pátria e a propriedade.
            </Text>
          </View>  

          <View style={styles.card}>
            <Text style={styles.cardNumber}>7º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"Poemas Negros" (Jorge de Lima):</Text> 
            Incorpora a cultura e a religiosidade afro-brasileira à alta literatura, dando voz e dignidade à herança negra.
            </Text>
          </View>  

          <View style={styles.card}>
            <Text style={styles.cardNumber}>8º</Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>"A Bagaceira" (José Américo de Almeida):</Text> 
            Romance de 1928 que antecipa o Modernismo regionalista, tratando da seca, do trabalho e dos costumes do Nordeste.
            </Text>
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

  bottomSpacing: {
    height: 20, 
  },
});