import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,

} from 'react-native';
import IconNoti from 'react-native-vector-icons/Ionicons';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder={'Search favorite food'}
                    placeholderTextColor={'#778ca3'}
                />
                <IconNoti
                    name="notifications" 
                    size={22}
                    color="#000"
                    style={styles.icon}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection:"row",
        flex: 1,
        backgroundColor: "#fff",
        // justifyContent: "center",
        // alignItems: "center",
    },
    header:{
        flexDirection:"row",
        width:"100%",
        height:70,
        // backgroundColor:"#a5b1c2",
        alignItems:"center",
        justifyContent:"flex-end",
        paddingHorizontal:16
    },
    input:{
        borderRadius:15,
        backgroundColor:"#000",
        height:36,
        fontSize:12,
        padding:8,
        width:240,
        marginRight:8
    },
    icon:{
    },
})
