import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, Dimensions, Image } from 'react-native'

export default class SplashScreen extends Component {
    constructor() {
        super();
        this.animated = new Animated.Value(0);
        this.text = new Animated.Value(0);
    }

    animate = () => {
        Animated.timing(this.animated, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    componentDidMount = () => {
        this.animate();
    }
    render() {
        const WIDTH = Dimensions.get('window').width;
        const opacity = this.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
        return (
            <View style={styles.container}>

                <Animated.Image source={require('./images/logo.png')} style={[{ opacity }, { height: 150, width: WIDTH - 50, alignSelf: 'center', resizeMode: 'cover' }]}>

                </Animated.Image>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },


})
