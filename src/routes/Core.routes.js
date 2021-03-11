import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Menu from '../pages/Core/Menu'

const Tab = createBottomTabNavigator()

export default function CoreRoutes(){
    return(
        <Tab.Navigator initialRouteName="Find for" backBehavior='history' screenOptions={{
        }} >
            <Tab.Screen name="Menu Principal" component={Menu} options={{
                headerShown:false
            }} />
        </Tab.Navigator>
    );
}