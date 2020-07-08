import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
} from "react-native";

class BatterieBox extends Component{

    render() {

        let {niveau} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.day}>{niveau}%</Text>
            </View>
        )
    }
}

export default BatterieBox;

const styles = StyleSheet.create({
    container:{
        maxWidth: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 5
    },
    day:{
        fontSize: 22,
        color: "#7766C6",
        fontWeight: "bold",
    },
    month:{
        fontSize: 15,
        fontWeight: "bold",
    }
});