import { Image, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { ThemedView } from "./../components/ThemedView";
import { ThemedText } from "./../components/ThemedText";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getOrders } from "eccom-lib";
import CartScreen from "../components/CartScreen";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <CartScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
