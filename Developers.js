import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image, TouchableNativeFeedback, AsyncStorage, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Developers extends Component {
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
                                        <Text style={{ fontSize: 23, fontWeight: '700', color: '#000', marginLeft: 10 }}>Developers</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.row2}>
                            <View style={{ flex: 1, flexDirection: 'row', height: 120, marginTop: 10 ,justifyContent:'center',elevation:16}} >
                                    <View style={{ flex: 0.94, flexDirection: 'column', height: 120,alignSelf: 'center', }}>
                                        <View style={{ flex: 1, flexDirection: 'row' ,height: 120,}}>
                                            <View style={{flex:0.4,height:120}}>
                                                <Image source={require('./images/devanshu.jpeg')} style={{width:120,height:120,borderRadius:60,resizeMode:'cover'}}/>
                                            </View>
                                            <View style={{flex:0.6,height:120,justifyContent:'flex-start',marginLeft:15,marginTop:20}}>
                                                <Text style={{fontSize:20,color:'black'}}>Devanshu Malhotra</Text>
                                                <Text style={{fontSize:14}}>(Frontend Developer)</Text>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', height: 120, marginTop: 20 ,justifyContent:'center',elevation:16}} >
                                    <View style={{ flex: 0.94, flexDirection: 'column', height: 120,alignSelf: 'center', }}>
                                        <View style={{ flex: 1, flexDirection: 'row' ,height: 120,}}>
                                            <View style={{flex:0.4,height:120}}>
                                                <Image source={require('./images/rupinder.jpeg')} style={{width:120,height:120,borderRadius:60,resizeMode:'cover'}}/>
                                            </View>
                                            <View style={{flex:0.6,height:120,justifyContent:'flex-start',marginLeft:15,marginTop:20}}>
                                                <Text style={{fontSize:20,color:'black'}}>Rupinder Singh</Text>
                                                <Text style={{fontSize:14}}>(Backend Developer)</Text>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                                
                                <View style={{ flex: 1, flexDirection: 'row', height: 120, marginTop: 20 ,justifyContent:'center',elevation:16}} >
                                    <View style={{ flex: 0.94, flexDirection: 'column', height: 120,alignSelf: 'center', }}>
                                        <View style={{ flex: 1, flexDirection: 'row' ,height: 120,}}>
                                            <View style={{flex:0.4,height:120}}>
                                                <Image source={require('./images/gurjeet.jpeg')} style={{width:120,height:120,borderRadius:60,resizeMode:'cover'}}/>
                                            </View>
                                            <View style={{flex:0.6,height:120,justifyContent:'flex-start',marginLeft:15,marginTop:20}}>
                                                <Text style={{fontSize:20,color:'black'}}>Gurjeet Singh</Text>
                                                <Text style={{fontSize:14}}>(Graphic Designer)</Text>

                                            </View>
                                        </View>
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
        justifyContent: 'center',
        marginBottom: 5
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
        marginTop: 2,
        marginBottom: 15

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