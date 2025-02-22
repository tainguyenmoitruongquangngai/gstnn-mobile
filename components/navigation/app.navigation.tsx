import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";
import AppHeader from "./app.header";
import React from "react";
import FormScreen from "../review/FormScreen";
import CustormerScreen from "../review/customerInfo";

export type RootStackParamList = {
    home: undefined;
    form: undefined;
    review_detail:undefined;
    custormer_info: undefined;
  };

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ header: () => <AppHeader /> }}
      />
      <Stack.Screen
        name="review_detail"
        component={DetailScreen}
        options={{ title: "Chi tiết Review" }}
      />
      <Stack.Screen
        name="form"
        component={FormScreen}
        options={{ title: "Truyền số liệu nước dưới đất" }}
      />
      <Stack.Screen
        name="custormer_info"
        component={CustormerScreen}
        options={{ title: "Thông tin khách hàng" }}
      />
    </Stack.Navigator>
  );
};
const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home1"
        options={{ title: "Trang chủ", header: () => <></> }}
        component={HomeLayout}
      />
      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{
          title: "Thông tin",
          header: () => <AppHeader />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
