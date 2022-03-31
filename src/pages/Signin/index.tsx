import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import IllustragionImg from "../../assets/illustration.png";

export function Signin() {
  return (
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
      <Image
        source={IllustragionImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
}
