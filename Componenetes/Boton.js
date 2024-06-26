import react from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Boton () {
    return ( 
        <TouchableOpacity >
                  <LinearGradient
                        colors={['black', 'gray', 'white']}
                        style={styles.boton}
                        >
                        <Text style={styles.text} onPress={() => navigation.navigate('Principal')}>Continuar</Text>
                    </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    boton: {
        marginTop: 15,
        width: 300,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

});