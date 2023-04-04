import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import D4Screen from "./src/screens/D4Screen";
import D6Screen from "./src/screens/D6Screen";
import D8Screen from "./src/screens/D8Screen";
import D10Screen from "./src/screens/D10Screen";
import D12Screen from "./src/screens/D12Screen";
import D20Screen from "./src/screens/D20Screen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    D4: D4Screen,
    D6: D6Screen,
    D8: D8Screen,
    D10: D10Screen,
    D12: D12Screen,
    D20: D20Screen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Dice App",
    },
  }
);

export default createAppContainer(navigator);
