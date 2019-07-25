import React, { PureComponent } from 'react'
import { View, Text} from 'react-native'
class MapScreen extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Find the most accurate route</Text>
      </View>
         );
    }
}
 
export default MapScreen;