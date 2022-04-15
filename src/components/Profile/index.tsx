import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Profile() {
  return (
    <View>
      <View style={styles.container}>
        <Text styles={styles.greeting}>Olá,</Text>

        <Text style={styles.username}>Rodrigo</Text>
      </View>

      <Text style={styles.message}>Hoje é dia de vitória</Text>
    </View>
  );
}
