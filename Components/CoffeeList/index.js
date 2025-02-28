import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Spinner } from "native-base";

// Stores
import authStore from "../../Stores/authStore";
import coffeeStore from "../../Stores/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";
import Logout from "../Buttons/Logout";

const CoffeeList = ({ navigation }) => {
  if (coffeeStore.loading) return <Spinner />;
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
      {authStore.user && <Logout />}
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />
};

export default observer(CoffeeList);
