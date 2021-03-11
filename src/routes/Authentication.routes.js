import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoadingPage from '../pages/LoadingPage'
import LandingPage from '../pages/Authentication/LandingPage'
import LoginPage from '../pages/Authentication/LoginPage'
import SignUpPage from '../pages/Authentication/SignUpPage'
import ConfirmEmailPage from '../pages/Authentication/ConfirmEmailPage'

import FindForPage from '../pages/Authentication/FindForPage'
import JobTypePage from '../pages/Authentication/JobTypePage'
import CategoryPage from '../pages/Authentication/CategoryPage'
import MoreData from '../pages/Authentication/MoreData'

const Stack = createStackNavigator();

export default function AuthenticationRoutes(){
    return(
        <Stack.Navigator initialRouteName="Loading Page" >
            <Stack.Screen name="Loading Page" component={LoadingPage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Landing Page" component={LandingPage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Login" component={LoginPage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="SignUp" component={SignUpPage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Confirm Email" component={ConfirmEmailPage}options={{
                headerShown:false
            }} />
            <Stack.Screen name="Find for" component={FindForPage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Job Type" component={JobTypePage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Category Type" component={CategoryPage} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="More Data" component={MoreData} options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    );
}