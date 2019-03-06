import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const WIDTH = Dimensions.get('window').width;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ScrollView>
                    <View style={styles.parent}>
                        <View style={styles.header}>
                            <View style={{ flex: 0.96, flexDirection: 'column', justifyContent: 'center', }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryList')} >
                                        <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'center'}}>
                                            <Icon name="menu" size={32} color="black" />
                                            <Text style={{fontSize:16,color:'black',justifyContent:'space-around',alignSelf:'center',marginLeft: 8,}}>Menu</Text>
                                        </View>

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Developers')} >
                                        <MyIcon name="dots-vertical" size={32} color="black" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        <View style={styles.row2}>
                            <View style={{ flex: 0.98, flexDirection: 'column' }}>
                                <Image source={require('./images/logo.png')} style={{ height: 148, width: WIDTH - 50, alignSelf: 'center' }} />
                            </View>
                        </View>

                        <View style={styles.row3}>
                            <View style={{ flex: 0.75, flexDirection: 'column' }} >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.5, flexDirection: 'column', borderBottomColor: '#8f9399', borderRightColor: '#8f9399', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderWidth: 1 }}>
                                        <View style={{ flex: 0.68, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('./images/star.png')} style={{ alignSelf: 'center', width: 100, height: 110, resizeMode: "center" }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.32, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15, color: 'rgb(243,132,0)' }}>Star Night</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, flexDirection: 'column', borderBottomColor: '#8f9399', borderRightColor: 'transparent', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderWidth: 1 }}>
                                        <View style={{ flex: 0.68, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('./images/hackthon.png')} style={{ alignSelf: 'center', width: 100, height: 70, resizeMode: "center" }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.32, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15, color: 'black' }}>Hackathon</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.5, flexDirection: 'column', borderBottomColor: '#8f9399', borderRightColor: '#8f9399', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderWidth: 1 }}>
                                        <View style={{ flex: 0.68, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('./images/Mun.png')} style={{ alignSelf: 'center', width: 100, marginTop: 5, height: 70, resizeMode: "center" }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.32, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15, color: '#2d87c7' }}>DAV MUN</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, flexDirection: 'column', borderBottomColor: '#8f9399', borderRightColor: 'transparent', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderWidth: 1 }}>
                                        <View style={{ flex: 0.68, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('./images/quiz.png')} style={{ alignSelf: 'center', width: 100, height: 70, resizeMode: "center" }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.32, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15, color: 'rgb(190,20,80)' }}>Mega Quiz</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.5, flexDirection: 'column', borderBottomColor: 'transparent', borderRightColor: '#8f9399', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderWidth: 1 }}>
                                        <View style={{ flex: 0.68, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('./images/robo.png')} style={{ alignSelf: 'center', width: 100, height: 70, resizeMode: "center" }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.32, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15, color: 'rgb(0,0,0)' }}>Robo War</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5, flexDirection: 'column', borderBottomColor: 'transparent', borderRightColor: 'transparent', borderTopColor: 'transparent', borderLeftColor: 'transparent', borderWidth: 1 }}>
                                        <View style={{ flex: 0.68, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('./images/roadies.png')} style={{ alignSelf: 'center', width: 100, height: 110, resizeMode: "center" }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.32, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ alignSelf: "center", fontSize: 18, marginBottom: 15, color: 'rgb(113,113,49)' }}>Roadies</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: 8
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
    header: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:9
        

    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,

    },
    row3:
    {
        flex: 1,
        flexDirection: 'row',
        height: 350,
        justifyContent: 'center',
        marginTop: 15,

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