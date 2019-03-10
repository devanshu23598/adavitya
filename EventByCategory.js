import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Image, TouchableNativeFeedback, AsyncStorage, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class EventByCategory extends Component {
    constructor(props) {
        super(props);
        this.state={
            eventByCategory:[],
            loader:true
        }

    }
    fetchEventsByCategory = () => {
        var data=new FormData();
        data.append('api_id','6d8e710f9b34dc5e705f46f30da44c87');
        data.append('category_id',this.props.navigation.state.params.category_id)
        fetch('http://adavitya.predot.co.in/Events/getByCategoryId', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({
                eventByCategory:responseJson.events,
                loader:false
            })
        })
        .catch((error) => {
            console.error(error);
        });
}

    
    componentDidMount(){
        this.fetchEventsByCategory();
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {
                        this.state.loader?(<ActivityIndicator size="large" color="rgb(14,130,167)" style={{ alignSelf: 'center' }} />):(
                            <ScrollView>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <View style={styles.parent}>
                            <View style={styles.header}>
                                <View style={{ flex: 0.96, flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10, marginRight: 2 }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                            <Icon name="arrow-back" size={30} color="black" />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 23, fontWeight: '700', color: '#000', marginLeft: 10 }}>{this.props.navigation.state.params.category_name}</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.row2}>
                                {
                                    this.state.eventByCategory.map((value,index)=>{
                                        return(
                                            <View style={{ flex: 1, flexDirection: 'row', height: 120, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} key={index}>
                                    <View style={{ flex: 1, flexDirection: 'column', height: 120, }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 0.28 }}>
                                                <View style={{ width: 100, height: 120,marginLeft:10 }}>
                                                    {
                                                        value.event_poster!=''?(
                                                    <Image source={{uri: `http://portal.predot.co.in/${value.event_poster}`}} style={{ width: 100, height: 120, resizeMode: 'cover' }} />

                                                        ):(
                                                    <Image source={require('./images/events.jpeg')} style={{ width: 100, height: 120, resizeMode: 'cover' }} />

                                                        )
                                                    }
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.52 ,marginLeft:10}}>
                                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start',marginLeft:10 }}>
                                                    <Text style={{ fontSize: 16, color: 'black',fontWeight:'bold' }} numberOfLines={1} ellipsizeMode="tail">{value.event_name}</Text>
                                                    <Text style={{ fontSize: 12,marginTop:4  }}>Date: {value.event_date}</Text>
                                                    <Text style={{ fontSize: 12 ,marginTop:4}}>Time: {value.event_time}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.2, }}>
                                                <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('EventDetail',{
                                                    event_id:value.event_id
                                                })}>
                                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', marginRight: 8 }}>
                                                        <View style={{ height: 30, borderRadius: 15, borderColor: '#009cc6', borderWidth: 2 }}>
                                                            <Text style={{ alignSelf: 'center', color: 'black', marginTop: 3 }}>View</Text>
                                                        </View>
                                                    </View>
                                                </TouchableNativeFeedback>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                        )
                                    })
                                }
                                
                            </View>
                        </View>
                    </ScrollView>

                        )
                    }
                    
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