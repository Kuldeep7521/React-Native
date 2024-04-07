import React from "react";
import{
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from "react-native"

function App(){
  return(
<SafeAreaView>
  <View>
    <Text>
      Hello World
      aale chak me aagaya
      
      
    </Text>
    <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   
  </View>
</SafeAreaView>
  );
}

export default App;
