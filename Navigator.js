import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Logo from "./components/Logo";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Profile App",
          headerLeft: () => <Logo />,
          headerTitleStyle: {
            fontSize: 25,
          },
          headerStyle: {
            height: 150,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
