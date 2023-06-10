import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Write from "../screen/Write";

const NativeStack = createNativeStackNavigator();

function Stack() {
    return(
        <NativeStack.Navigator>
            <NativeStack.Screen name="Write" component={Write} />
        </NativeStack.Navigator>
    );
}

export default Stack;