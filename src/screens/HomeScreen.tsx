import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const HomeScreen=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"green",
        
    
    },
    navigator:{
        flex:2,
        backgroundColor:"blue",
    },
    body:{
        flex:9,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",

    },
    footer:{
        flex:1,
    
    },

    text: {
        }
});