import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';


export default class layoutDestinos extends Component {
    render () {
        return (
            <View style={style.container}>

                <View style={style.row}>
                    <Text style={style.th}>ID:</Text>
                    <Text style={style.data}>{this.props.data.id}</Text>
                </View>

             
                <View style={style.row}>
                    <Text style={style.th}>Nome:</Text>
                    <Text style={style.data}>{this.props.data.nome}</Text>
                </View>

                <View style={style.row}>
                    <Text style={style.th}>Descrição:</Text>
                    <Text style={style.data}>{this.props.data.descrição}</Text>
                </View>

                <View style={style.row}>
                    <Text style={style.th}>Preço:</Text>
                    <Text style={style.data}>{this.props.data.preço}</Text>
                </View>

                <View style={style.row}>
                    <Text style={style.th}>Foto:</Text>
                    <Image style={style.foto} source={{uri:this.props.data.foto}} />
                </View>

                
               
                <View style={style.hr} />  
            </View>
        )
    }
}

const style = StyleSheet.create ({

    container: {
        fontFamily: 'Avenir',
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    hr: {    
        borderBottomColor: '#adb5bd',
        borderBottomWidth: 3,
        height: 10,
        width: '100%',
        marginVertical: 15,
        
    },

    th: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5,
        
    },

    data: {
        fontSize: 12,
       
    },

    foto: {
        width: 300,
        height: 200,
        borderRadius: 30,
        
    }


});
