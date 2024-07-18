import { View, Text, Modal } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { Color } from "../assets/styles/GlobalStyles";
import { ThemedLabel } from "./ThemedLabel";
import ThemedDropdown from "./ThemedDropdown";
import { ThemedButton } from "./ThemedButton";
import { ComponentStyles } from "../assets/styles/ComponentStyles";

const AddItemModal = ({ modalVisible, onClose }) => {
  return (
    <ThemedView>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <ThemedView style={{ flex: 1, flexDirection: "row" }}>
          <ThemedView style={ComponentStyles.addItemModal}>
            <ThemedView style={{ height: 67, gap: 10 }}>
              <ThemedLabel label={"Select an Item"} style={{ height: 19 }} />
              <ThemedView
                style={{
                  height: 45,
                  backgroundColor: Color.gray100,
                }}
              >
                <ThemedDropdown
                  data={[
                    { title: "Cashier", value: "cashier" },
                    { title: "Branch Admin", value: "branch-admin" },
                    { title: "Store Admin", value: "store-admin" },
                  ]}
                  labelField="title"
                  valueField="value"
                  onChange={(item) => {}}
                />
              </ThemedView>
            </ThemedView>
            <ThemedButton title={"exit"} onPress={onClose} />
          </ThemedView>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

export default AddItemModal;
