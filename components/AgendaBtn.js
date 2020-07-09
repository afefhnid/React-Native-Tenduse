import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    Button
} from "react-native";
import {Linking} from "react-native-web";

class AgendaBtn extends Component{

    agenda()
    {
        if(Platform.OS === 'ios')
        {
            Linking.openURL('calshow:');
        }
        else if (Platform.OS === 'android')
        {
            Linking.openURL('content://com.android.calendar/time/');
        }
    }

    render() {
        return (
            <Button title={"Agenda"} onPress={() => this.agenda()}/>
        )
    }
}

export default AgendaBtn;

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