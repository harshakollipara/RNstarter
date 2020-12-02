import React, { Component } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";
import UtilityManager from "../../utility/UtilityManager";

interface AppProps {
}

interface AppState {
    key: string,
    Contact: any,
    ID: string,
    searchId: string,
    dataFound: string
}
export default class SqliteStorageApp extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            key: '',
            Contact: '',
            ID: '',
            searchId: '',
            dataFound: '',
        }
    }

    insertData() {
        const key = this.state.key;
        const contact = this.state.Contact;
        const id = this.state.ID;
        UtilityManager.sqliteStorageInstance.insertData(id, key, contact);
    }

    searchData() {
        const searchId = this.state.searchId;
        UtilityManager.sqliteStorageInstance.searchData(searchId);
    }

    updateData() {
        const searchId = this.state.searchId;
        const key = this.state.key;
        const contact = this.state.Contact;
        const id = this.state.ID;
        UtilityManager.sqliteStorageInstance.updateData(id, name, contact, searchId);
    }

    deleteData() {
        const searchId = this.state.searchId;
        UtilityManager.sqliteStorageInstance.deleteData(searchId);
    }

    render() {
        return (
            <ScrollView>
                <View>
                    {/* 
    For Insert Data 
*/}
                    <View style={{ borderWidth: 2, backgroundColor: '#939694', margin: 5 }}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Insert Data Into DataBase</Text>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholder="ID"
                                onChangeText={ID => this.setState({ ID })}
                            />
                            <TextInput
                                placeholder="Name"
                                onChangeText={key => this.setState({ key })}
                            />
                            <TextInput
                                placeholder="Contact Number"
                                maxLength={10}
                                keyboardType="numeric"
                                onChangeText={Contact => this.setState({ Contact })}
                            />
                            <Button
                                color='red'
                                title='Insert Data' onPress={() => {
                                    this.insertData()
                                }} />
                        </View>
                    </View>

                    {/* 
    For Update Data 
*/}
                    <View style={{ borderWidth: 2, backgroundColor: '#939694', margin: 5 }}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Update Data Into DataBase</Text>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholder="Enter Search ID"
                                onChangeText={searchId => this.setState({ searchId })}
                            />

                            <Button
                                title='Search Data' onPress={() => {
                                    this.searchData();

                                }} />
                            <TextInput
                                placeholder="ID"
                                onChangeText={ID => this.setState({ ID })}
                            />
                            <TextInput
                                placeholder="Name"
                                onChangeText={key => this.setState({ key })}
                            />
                            <TextInput
                                placeholder="Contact Number"
                                maxLength={10}
                                keyboardType="numeric"
                                onChangeText={Contact => this.setState({ Contact })}
                            />
                            <Button
                                color='red'
                                title='Update Data' onPress={() => {
                                    this.updateData();

                                }} />
                        </View>
                    </View>
                    {/* 
    For Delete Data 
*/}
                    <View style={{ borderWidth: 2, backgroundColor: '#939694', margin: 5 }}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Delete data From DataBase</Text>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholder="Enter Search ID which you want to delete"
                                onChangeText={searchId => this.setState({ searchId })}
                            />
                            <Button
                                color='red'
                                title='Delete Data' onPress={() => {
                                    this.deleteData();

                                }} />
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
