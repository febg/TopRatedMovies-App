import React from 'react'
//Tab navegation for view, react native component
import { TabNavigator } from 'react-navigation'

import TopRated from './Screens/TopRated'
import Search from './Screens/Search'

import { Icon } from 'native-base'

const Router = TabNavigator({
    TopRated: { screen: TopRated },
    Search: { screen: Search }
},
{
    navigationOptions: ({ navigation }) => ({
        header: null,
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'TopRated') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
}
)

export default Router

