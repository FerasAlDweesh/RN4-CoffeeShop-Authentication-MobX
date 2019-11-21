import { createStackNavigator } from "react-navigation-stack";

import StackNav from "./StackNav";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const SwitchNav = createStackNavigator({
  StackNav: StackNav,
  SignUp: Signup,
  Login: Login
});

export default SwitchNav;
