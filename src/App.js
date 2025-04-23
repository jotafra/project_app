import {NavigationContainer} from "@react-navigation/native"; //IMPORTAÇÃO DE NAVEGAÇÃO
import { createStackNavigator } from "@react-navigation/stack"; //IMPORTAÇÃO DE NAVEGAÇÃO
import Login from "./screens/LoginScreen"
import Cadastro from './screens/CadastroScreen';
import Home from './screens/HomeScreen';
import CadastroEvento from './screens/CadastroEventoScreen';
import CadastroOrganizador from './screens/CadastroOrganizadorScreen';
import CadastroIngresso from './screens/CadastroIngressoScreen';
import Layout from "./components/layout";
//import TaskList from "./screens/TaskList";
//import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreen";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={()=>(
          <Layout><Login/></Layout>
        )}/>
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout><Cadastro/></Layout>
        )}/>
        <Stack.Screen name="EventoScreen"> 
        {()=>(
          <Layout>
             <EventosScreen/>
          </Layout>
        )}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador} />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}