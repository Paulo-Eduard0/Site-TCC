import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, router } from "expo-router";
import { useState } from 'react';

const seta = require('../img/seta.png');
const olhoAberto = require('../img/olho-aberto.png'); 
const olhoFechado = require('../img/olho-fechado.png');

export default function LoginAluno() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/'); 
    }
  };

  // Função para alternar entre mostrar/ocultar senha
  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background azul na parte superior */}
      <View style={styles.background} />
      
      {/* Container principal */}
      <View style={styles.container}>
        
        {/* Container da seta no canto superior esquerdo */}
        <TouchableOpacity style={styles.setaContainer} onPress={handleGoBack}>
          <Image source={seta} style={styles.setaImage} />
        </TouchableOpacity>

        {/* Título "Login Aluno" */}
        <View style={styles.login}>
          <Text style={styles.text}>Login Aluno</Text>
        </View>

        <View>
          <Text style={styles.brain}>BrainBoost</Text>
        </View>

        {/* Formulário de login */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity 
              style={styles.olhoButton} 
              onPress={toggleMostrarSenha}
            >
              <Image 
                source={mostrarSenha ? olhoAberto : olhoFechado} 
                style={styles.olhoImage} 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Separador "OU" */}
          <View>
            <Text style={styles.ou}>OU</Text>
          </View>

          {/* Botão do Google */}
          <TouchableOpacity style={styles.botaoG}>        
            <Text style={styles.buttonGoogle}>Google</Text>
          </TouchableOpacity>
        </View>

        {/* Link de cadastro */}
        <Link href='../cadastroA' asChild>
          <TouchableOpacity >
            <View>
              <Text style={styles.cadastro}>Não tenho conta</Text>
            </View>
          </TouchableOpacity>  
        </Link>  

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
  setaContainer: {
    position: 'absolute',
    top: 10,
    left: 30,
    marginTop: 40,
    zIndex: 1,
  },
  setaImage: {
    width: 30,
    height: 30,
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
  
  senhaContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  inputSenha: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingRight: 50, 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  
  olhoButton: {
    position: 'absolute',
    right: 15,
    padding: 10,
  },
  
  olhoImage: {
    width: 24,
    height: 24,
    tintColor: '#999',
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
    backgroundColor: 'transparent',
  },
  botaoG: {
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#000428',
  },
  brain: {
    padding: 0,
    fontSize: 40,
    fontWeight: 'bold',
  },
});