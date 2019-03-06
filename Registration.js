import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity, Alert, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import API from './Helper/Helper';
export default class Registration extends Component {
    constructor(props) {
        super(props);
        
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
                            <View style={{ flex: 1, flexDirection: 'row', height: 60, marginTop: 10 ,justifyContent:'center',backgroundColor:'red',marginTop:8}} >
                                <View style={{flex:0.96,flexDirection:'column',justifyContent:'center',}}>

                                </View>
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
        color: '#fff',
        fontFamily: 'sans-serif-thin'
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
        height: 30,
        justifyContent: 'space-around',
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