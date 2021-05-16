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
                <Image/>
                <TextInput
                    style={styles.input}
                    placeholder={'Search favorite food'}
                    placeholderTextColor={'#778ca3'}
                />
                <IconNoti
                    name="notifications" 
                    size={22}
                    color="#4b6584"
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
        justifyContent:"flex-end"
    },
    input:{
        borderRadius:15,
        backgroundColor:"#4b6584",
        height:24,
        fontSize:8,
        padding:8,
        width:150,
        justifyContent:"flex-end",
        marginTop:22
    },
    icon:{
        marginTop:22
    },
})
