import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Link } from "expo-router";

const LogoApp = require('../img/brain.png');
const Wave = require('../img/wave.png');

const { width, height } = Dimensions.get('window');

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.backgroundContainer}>
                <Image source={Wave} style={styles.waveBackground} resizeMode="cover" />
            </View>
            
            <View style={styles.container}>
                <Image source={LogoApp} style={styles.imagemlogo} />
                <Text style={styles.title}>BRAINBOOST</Text>

                <Link href="../loginG" asChild>        
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.botaoText}>Gestão</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="../loginP" asChild>
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.botaoText}>Professor</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="../loginA" asChild>
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.botaoText}>Aluno</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="../minhasRedações" asChild>
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.botaoText}>teste</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000428',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05, 
    },
    title: {
        fontSize: width * 0.1, 
        fontWeight: 'bold',
        color: '#6495ED',
        marginVertical: height * 0.02, 
        textAlign: 'center',
    },
    Botoes: {
        backgroundColor: '#6495ED',
        padding: height * 0.015,
        borderRadius: 200,
        marginTop: height * 0.02,
        width: width * 0.7, 
    },
    botaoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: width * 0.045, 
        fontWeight: 'bold',
    },
    imagemlogo: {
        width: 1000, 
        height: width * 0.5, 
        resizeMode: 'contain',
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '55%',
    },
    waveBackground: {
        width: '100%',
        height: '100%',
    },
});