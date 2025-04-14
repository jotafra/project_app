import Login from "./screens/LoginScreen";
import EventosScreen from "./screens/EventosScreen";
import Cadastro from "./screens/CadastroScreen";
import Home from "./screens/HomeScreen";
import CadastroEvento from "./screens/CadastroEventoScreen";
import CadastroIngresso from "./screens/CadastroIngressoScreen";
import CadastroOrganizador from "./screens/CadastroOrganizadorScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "./components/layout";
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        {/* <Stack.Screen name="TaskList" component={TaskList}/>
        <Stack.Screen name="TaskDetail" component={TaskDetail}/> */}
        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Cadastro"
          component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen
          name="CadastroOrganizador"
          component={CadastroOrganizador}
        />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
