import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import cartStore from "../../Stores/cartStore";
import authStore from "../../Stores/authStore";

const CartButton = ({ navigation }) => {
  const handlePress = () => {
    if (authStore.user) navigation.navigate("CartScreen");
    else navigation.navigate("Login");
  };

  return (
    <Button onPress={handlePress} transparent light>
      {authStore.user ? (
        <>
          <Text style={{ color: "white" }}>{cartStore.quantity}</Text>
          <Icon
            name="shoppingcart"
            type="AntDesign"
            style={{ color: "white" }}
            onPress={() => navigation.navigate("CartScreen")}
          />
        </>
      ) : (
        <Icon
          name="login"
          type="MaterialCommunityIcons"
          style={{ color: "white" }}
          onPress={() => navigation.navigate("Login")}
        />
      )}
    </Button>
  );
};

export default withNavigation(observer(CartButton));
