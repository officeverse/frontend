import React, { useState } from "react";
import { SafeAreaView, ImageBackground, ScrollView } from "react-native";
import { Menu, Button } from 'react-native-paper';

const image = require("../assets/office_home.png");

export default function Leaderboard() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={image}
          style={{flex: 1}}
          resizeMode="cover"
        >
          {/* Here you will include the scrollable content of your leaderboard */}
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Leaderboard</Button>}
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
          {/* More contents here */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
