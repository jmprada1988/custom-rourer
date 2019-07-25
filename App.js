import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import MapScreen from './components/MapScreen';

class App extends PureComponent {
  state = { 
    loggedIn: false
   }


//    renderContent(){
//     switch(this.state.loggedIn){
//         case true:
//             return(
//             <Button onPress={() => firebase.auth().signOut()}>
//                 Log Out
//             </Button>
//             )
//         case false:
//             return <LoginForm />

//         default: 
//         return <Spinner size="large" />
//     }        
// }

  render() { 
    return ( <View style={styles.container}>
      <Header  headerText="Authentication"/>
      <Button
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Map' })
              ],
            }))
          }}
        >Find Route</Button>
    </View> );
  }
}

const AppNavigator = createStackNavigator({
  Auth: {
    screen: App
  },
  Map: {
    screen: MapScreen
  }
}, {
  initialRouteName: 'Auth'
})
export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
