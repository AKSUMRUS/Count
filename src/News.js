import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const News = ({title,text}) =>{
    return <View style = {styles.root}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 32,
        color: 'red'
    },
    text:{
        fontSize: 20,
        color: 'blue'
    }
})

export default News;
