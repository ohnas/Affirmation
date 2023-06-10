import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Counter from "../screen/Counter";
import Calendar from "../screen/Calendar";
import Setting from "../screen/Setting";

const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Counter" component={Counter} />
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>  
    );
}

export default Tabs;