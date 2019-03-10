import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, Image, Alert, AsyncStorage, TouchableOpacity,TouchableNativeFeedback, ActivityIndicator ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HEIGHT=Dimensions.get('window').height;

export default class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            eventDetails:[],
            loader:true,
            id:0
        }

    }
    fetchEventsByCategory = () => {
        var data=new FormData();
        data.append('api_id','6d8e710f9b34dc5e705f46f30da44c87');
        data.append('event_id',this.props.navigation.state.params.event_id)
        fetch('http://adavitya.predot.co.in/Events/getByEventId', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({
                eventDetails:responseJson.events,
                id:0,
                loader:false
            },()=>{
                this.setID();
            })
        })
        .catch((error) => {
            console.error(error);
        });
}
setID=()=>{
    this.state.eventDetails.map((value)=>{
        this.setState({
            id:value.event_id
        })
    })
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
                                    <View style={{ flex: 0.96, flexDirection: 'column', justifyContent: 'center', }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginRight: 2 }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                            <Icon name="arrow-back" size={30} color="black" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration',{
                                            event_id:this.state.id
                                        })}>
                                            <View style={{width:60,height:29,backgroundColor:'green',borderRadius: 13,justifyContent:'space-around'}}><Text style={{alignSelf:'center',color:"white"}}>Register</Text></View>
                                        </TouchableOpacity>
                                    </View>
                                    </View>
                                </View>
                                
                                {
                                    this.state.eventDetails.map((value,index)=>{
                                        return(
                                            <View key={index}>
                                                <View style={styles.row2}>
                                                    <View style={{ flex: 1, flexDirection: 'column', height: 235, justifyContent: 'center', alignItems: 'center' }}>
                                                        {
                                                            value.event_poster!==''?(
                                                                <Image source={{uri: 'http://portal.predot.co.in/'+value.event_poster}} style={{
                                                                    alignSelf: 'center', resizeMode: 'cover', height: 235, width: 160
                                                                }} />
                                                            ):(
                                                                <Image source={require('./images/events.jpeg')} style={{
                                                                    alignSelf: 'center', resizeMode: 'cover', height: 235, width: 160
                                                                }} />
                                                            )
                                                        }
                                                        
                                                    </View>
                                                </View>
                                                <View style={styles.row3}>
                                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                                        <View style={{ flex: 0.95, flexDirection: 'column', height: 100, justifyContent: 'space-around' }}>
                                                            <View>
                                                                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '300', color: 'black', marginTop: 10, fontWeight: 'bold' }} numberOfLines={1} ellipsizeMode="tail">{value.event_name}</Text>
                                                            </View>
                                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ alignSelf: 'center', fontWeight: "500", color: 'black' }}>Date: </Text>
                                                                <Text>{value.event_date}</Text>

                                                            </View>
                                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ alignSelf: 'center', fontWeight: "500", color: 'black' }}>Time: </Text>
                                                                <Text>{value.event_time}</Text>

                                                            </View>
                                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ alignSelf: 'center', fontWeight: "500", color: 'black' }}>Venue: </Text>
                                                                <Text>{value.event_venue}</Text>

                                                            </View>

                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.row5}>
                                                    <View>
                                                        <Text style={{ fontSize: 19, fontWeight: '700', color: 'black', marginLeft: 10 }}>Description :</Text>
                                                    </View>
                                                    <View style={{ paddingLeft: 10, paddingRight: 15 }}>
                                                        <Text >{value.event_des}
                                                        </Text>
                                                        
                                                    </View>
                                                    <View style={{marginTop:5}}>
                                                        <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft: 10}}>Event Coordinator:</Text>
                                                        <Text style={{marginLeft: 10}}>{value.coordinators}</Text>
                                                        </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>    
                        </ScrollView>

                        )}
                                        
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
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 4
    },
    footer:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    row3:
    {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'flex-start',
        marginBottom: 15

    },
    row4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        marginTop: 10
    },
    row5: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10
    }
})