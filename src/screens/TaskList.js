import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TaskList({ navigation }) {
  const tasks = [
    {
      id: 1,
      title: "Comprar Leite",
      date: "2025-04-27",
      time: "10:00",
      adress: "Trabalho",
    },
    {
      id: 2,
      title: "Estudar",
      date: "2024-06-20",
      time: "14:45",
      adress: "Trabalho",
    },
    {
      id: 3,
      title: "Estudar React Native",
      date: "2024-06-26",
      time: "00:00",
      adress: "Casa",
    },
  ];

  const handleTaskPress = (task) => {
    navigation.navigate("TaskDetail", { task });
  };

  return (
    <View syle={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemCard}
            onPress={() => handleTaskPress(item)}
          >
            <Text>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  itemCard: {
    padding: 15,
    backgroundColor: "green",
    marginBottom: 10,
    borderRadius: 8,
  },
});
