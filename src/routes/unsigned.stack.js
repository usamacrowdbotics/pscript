import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../utils/constant';

// Scenes
import Login from '../scenes/login.scene';
import Register from '../scenes/register.scene';
import Welcome from '../scenes/welcome.scene';
import Starter from '../scenes/starter.scene';
import Guide from '../scenes/guide.scene';
// Scenes

const UnSignedStack = createStackNavigator({
    Welcome:{
        screen:Welcome,
        navigationOptions: () => navigationOptions
    },
    Starter:{
        screen:Starter,
        navigationOptions: () => navigationOptions
    },
    Guide:{
        screen:Guide,
        navigationOptions: () => navigationOptions
    },
    Login:{
        screen:Login,
        navigationOptions: () => navigationOptions
    },
    Register:{
        screen:Register,
        navigationOptions: () => navigationOptions
    },
   
},{
    initialRouteName:'Welcome'
});

export default UnSignedStack;