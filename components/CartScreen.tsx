import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedLabel } from "./ThemedLabel";
import { TouchableOpacity } from "react-native";
import AddItemModal from "./AddItemModal";
import { ThemedButton } from "./ThemedButton";

const CartScreen = () => {
  const [addItemVisible, setAddItemVisible] = useState(false);
  return (
    <ThemedView>
      <ThemedView
        style={{
          flexDirection: "row",
          paddingHorizontal: 32,
          paddingVertical: 10,
          height: 68,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemedView
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <ThemedLabel style={{ fontSize: 24 }} label="Cart" />
          <ThemedView
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#2196F3",
              borderRadius: 100,
              alignSelf: "center",
            }}
          >
            <ThemedLabel
              style={{ color: "white", alignSelf: "center" }}
              label="1"
            />
          </ThemedView>
        </ThemedView>
        <ThemedButton
          buttonStyle={{
            backgroundColor: "#2196F3",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
          onPress={() => setAddItemVisible(!addItemVisible)}
          title="Add Item to Cart"
          textStyle={{ color: "white", fontSize: 16 }}
        />
      </ThemedView>

      <AddItemModal
        onClose={() => setAddItemVisible(false)}
        modalVisible={addItemVisible}
      />
    </ThemedView>
  );
};

export default CartScreen;
