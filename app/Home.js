import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, SafeAreaView, View, Button,TouchableOpacity } from 'react-native';

function Home(props,onPress) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/krusty.jpeg')}>
            <SafeAreaView>
                <Text style={styles.txt}>Unforgetting</Text>
                <Text style={styles.txt2}>Experiences</Text>
                <Text style={styles.txt3}>Come, enjoy and lets have fun at our all new KrustyBurger Theme park. All ages are invited</Text>

                <TouchableOpacity onPress={console.log("Press")} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Click Me</Text>
                </TouchableOpacity>
            </SafeAreaView>






        </ImageBackground>


    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    txt: {
        alignSelf: "center",
        top: 30,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 40
    },
    txt2: {
        alignSelf: "center",
        top: 30,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 40
    },
    txt3: {
        alignSelf: "center",
        top: 50,
        color: "#fff",
        fontWeight: "light",
        fontSize: 20,
    },

    appButtonContainer: {
    top:630,
    alignItems:"center",
    alignSelf:"center",
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 10,
    width:400,
    height:50,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default Home;