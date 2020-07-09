import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Button,
    StyleSheet,
    Linking
} from 'react-native';
import { Table,
    TableWrapper,
    Row,
    Rows,
    Col,
    Cols,
    Cell
} from 'react-native-table-component';
import EventService from "../services/event.service";

class AdminUser extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params.data,
            short_description: null,
            description: null,
            HeadTable: ['Nom', 'Prenom', 'Mail', 'Action'],
            DataTable: [
                ['1', '2', '3'],
                ['a', 'b', 'c'],
                ['1', '2', '3'],
                ['a', 'b', 'c'],
                ['1', '2', '3']
            ]
        }
    }

    async componentDidMount() {
        let users = await EventService.getAllUsers();
        let DataTable = [];
        users.map((user) => {data.push([user.nom, user.prenom, user.email, Cell: ({ cell }) => (
            <Button title={"X"} onPress={() => this.deleteUser(user._id)}/>
        )])});

        this.setState({DataTable});
    }

    async deleteUser(id)
    {
        await EventService.deleteUser(id);
    }

    render() {

        const state = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.body}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                        <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                        <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                </View>

            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    headerImage: {
        height: 300
    },
    body: {

    }



});

export default AdminUser;