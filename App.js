import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Colors from "./App/Utils/Colors";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const App = () => {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_c3Vubnkta2l3aS01Ny5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <View style={styles.container}>
        <SignedIn>
          <Text
            style={{ fontSize: 17, color: Colors.BLACK, textAlign: "center" }}
          >
            You are Signed In
          </Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});

export default App;
