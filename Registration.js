import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity, TouchableNativeFeedback, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EyeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/Feather'
import API from './Helper/Helper';
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_id: this.props.navigation.state.params.event_id,
            full_name: '',
            clg_name: '',
            phone_number: '',
        }

    }
    register = () => {
        var data = new FormData();
        data.append('api_id', '6d8e710f9b34dc5e705f46f30da44c87');
        data.append('event_id', this.props.navigation.state.params.event_id)
        data.append('full_name', this.state.full_name)
        data.append('clg_name', this.state.clg_name)
        data.append('phone_number', this.state.phone_number)
        fetch('http://adavitya.predot.co.in/Registration/registerByEventId', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.response == false || responseJson.response == 'false') {
                    Alert.alert(
                        'Something went wrong!!',
                        'Please try again later',
                        [
                            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                            {
                                text: 'OK', onPress: () => {
                                    this.props.navigation.goBack();
                                }
                            },
                        ],
                        { cancelable: false }
                    )
                }
                else {
                    Alert.alert("Thank you for registration.");
                    this.props.navigation.navigate('Home');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <ScrollView>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <View style={styles.parent}>
                            <View style={styles.header}>
                                <View style={{ flex: 0.96, flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10, marginRight: 2 }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                            <Icon name="arrow-back" size={30} color="black" />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 23, fontWeight: '700', color: '#000', marginLeft: 10 }}>Registration for </Text>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.row2}>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <View style={{ flex: 0.25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <View style={{ flex: 0.95, flexDirecction: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'rgb(241,243,242)', borderRadius: 4 }}>
                                                <View style={{ alignSelf: 'center', paddingLeft: 2, marginLeft: 4 }}>
                                                    <UserIcon name="user" color="rgb(0,0,0)" size={18} />
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, alignSelf: 'center' }}>
                                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                                        <TextInput placeholderTextColor="rgb(0,0,0)" style={styles.email} placeholder="Enter name" onChangeText={(full_name) => this.setState({ full_name })} />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <View style={{ flex: 0.95, flexDirecction: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'rgb(241,243,242)', borderRadius: 4 }}>
                                                <View style={{ alignSelf: 'center', paddingLeft: 2, marginLeft: 4 }}>
                                                    <UserIcon name="phone" color="rgb(0,0,0)" size={18} />
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, alignSelf: 'center' }}>
                                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                                        <TextInput placeholderTextColor="rgb(0,0,0)" style={styles.email} placeholder="Enter mobile number" onChangeText={(phone_number) => this.setState({ phone_number })} />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <View style={{ flex: 0.95, flexDirecction: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'rgb(241,243,242)', borderRadius: 4 }}>
                                                <View style={{ alignSelf: 'center', paddingLeft: 2, marginLeft: 4 }}>
                                                    <Image source={require('./images/college.jpg')} style={{width:20,height:25}}/>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, alignSelf: 'center' }}>
                                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                                        <TextInput placeholderTextColor="rgb(0,0,0)" style={styles.email} placeholder="Enter college name" onChangeText={(clg_name) => this.setState({ clg_name })} />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.row3}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                                    <TouchableNativeFeedback onPress={() => { this.register() }}>
                                        <View style={{ flex: 0.9, flexDirection: 'row', justifyContent: 'center', borderRadius: 4, elevation: 7, backgroundColor: "green" }} >
                                            <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: 'center', fontSize: 19, color: '#fff', fontFamily: 'notoserif' }}>Submit</Text>
                                            </View>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                    </ScrollView>



                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },

    parent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    email:
    {
        fontSize: 14,
        color: '#000',
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    row2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    header: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    row3:
    {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 15,
    },
    row4: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 15,
    },
    row5: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10
    }
})