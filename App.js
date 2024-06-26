import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boton from './Componenetes/Boton';
import OtroButton from './Componenetes/OtroButton';

function Login ({ navigation}) {
  return (
    <View style={styles.global}>
    <View style={styles.move}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciá Sesión</Text>
      <Text style={styles.subtitulo}>¡Ingresá tu cuenta!</Text>

      <TextInput 
      placeholder='Correo1234@gmail.com'
      placeholderTextColor={'gray'}
      style={styles.textInput}
      />
      <TextInput
      placeholder='Contraseña'
      placeholderTextColor={'gray'}
      style={styles.textInput}
      />
      <OtroButton
      title='¿No tenés una cuenta?¡Registrate!'
      onPress={() => navigation.navigate('Register')}
      style={styles.OtroButton}
      />
      <Boton/>
      <StatusBar style="auto" />
    </View>
    </View>
    </View>
  );
}

function Register ({ navigation }) {
  return (
    <View style={styles.global}>
    <View style={styles.move}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrate</Text>
      <Text style={styles.subtitulo}>¡Creá tu cuenta!</Text>

      <TextInput 
      placeholder='Correo1234@gmail.com'
      placeholderTextColor={'gray'}
      style={styles.textInput}
      />
      <TextInput
      placeholder='Contraseña'
      placeholderTextColor={'gray'}
      style={styles.textInput}
      />
      <OtroButton
      title='¿Ya tenés una cuenta?¡Iniciá Sesión!'
      onPress={() => navigation.navigate('Login')}
      />
      <Boton/>
      <StatusBar style="auto" />
    </View>
    </View>
    </View>
  );
}

function PrincipalXD () {
  

  
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Principal" component={PrincipalXD} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//export default function App() {


const styles = StyleSheet.create({
  global: {
    flex:1,
    backgroundColor: '#2F4F4F',
  },
  container: {
    flex: 1,
    backgroundColor: '#3E3E3E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  move: {
    alignContent: 'center',
    marginLeft: 490,
    marginTop: 150,
    borderRadius: 10,
    height: 300,
    width: 400,
  },
  titulo: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textInput: {
    borderRadius: 10,
    margin: 10,
    width: 300,
    height: 30,
    backgroundColor: 'white',
    paddingStart: 10,
    
  },
  button: {
    textDecorationStyle: "dashed"
  }
  
});
