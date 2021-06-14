import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../utils/constant';
// Scenes
import Dashboard from '../scenes/dashboard.scene';
// Scenes

const SignedStack = createStackNavigator({
    Dashboard:{
        screen:Dashboard,
        navigationOptions: () => navigationOptions
    },   
},{
    initialRouteName:'Dashboard'
});

export default SignedStack;