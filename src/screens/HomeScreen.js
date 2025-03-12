
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Button
} from "react-native";

export default function Home({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Home </Text>
      <View style={styles.containere}>
      <Button title="Cadastro Evento" onPress={() => navigation.navigate("CadastroEvento")}/>
      </View>
      <View style={styles.containere}>
      <Button title="Cadastro Ingresso" onPress={() => navigation.navigate("CadastroIngresso")}/>
      </View>
      <View style={styles.containere}>
      <Button title="Cadastro Organizador" onPress={() => navigation.navigate("CadastroOrganizador")}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containere:{
    backgroundColor: "brown"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
});
