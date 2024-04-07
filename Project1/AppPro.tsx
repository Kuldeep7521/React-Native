import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    Button,
    Appearance
} from "react-native"

function AppPro():JSX.Element{
    const isDarkmode = useColorScheme() === "dark"

    

    
return(

    <SafeAreaView style={styles.content}>
        <View style={isDarkmode?styles.center:styles.Darkmode}>
            <Text>
                Hello World
            </Text>
            <Button title="Change Mode" ></Button>
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    center:{
        
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red",
        height:200,
        
    },
    content:{
        flex:1,
        justifyContent:"center"
    },
    Darkmode:{
        color:"red",
        backgroundColor:"lightblue",
        height: 100,
        alignItems: "center",
        justifyContent:"center"
    }
})
export default AppPro;