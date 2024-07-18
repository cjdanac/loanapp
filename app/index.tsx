import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import LoanForm from "../components/LoanForm";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <LoanForm/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
