import React from "react";
import authStore from "../../Stores/authStore";

function Logout() {
  return (
    <Button danger onPress={authStore.logout}>
      <Text>Logout</Text>
    </Button>
  );
}

export default Logout;
