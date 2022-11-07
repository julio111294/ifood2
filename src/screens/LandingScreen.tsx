import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const screenidth = Dimensions.get('screen').width
export const LandingScreen=()=>{


    return(
        <View style={styles.container}>
            <View style={styles.navigator}><Text>Navigator</Text></View>
            <View style={styles.body}>
                <Image source={require('../image/índice.png')} style={styles.icon}></Image>
                <View style={styles.addressBox}>
                    <Text style={styles.text}>your address</Text>
                </View>
            </View>
            <View style={styles.footer} >
                <Text>Footer</Text>

            </View>
                

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white",
        
    
    },
    navigator:{
        flex:2,
        backgroundColor:"whitw",
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
    icon:{
        width:120,
        height:120,
        
    },
    addressBox:{
         width:screenidth -100,
         borderBottomColor:"red",
         borderBottomWidth:0.5,
         padding:5,
         marginBottom:10,
         alignItems:"center",

    },
    addressTitle:{
        fontSize:24,
        fontWeight:"bold",
        color:"black",
    },

    text: {
        }
});