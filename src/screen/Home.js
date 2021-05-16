import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    FlatList,
    TextInput,
    
} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dff9fb",
        // justifyContent: "center",
        alignItems: "center",
    },
    imgHome:{
        width:80,
        height:80,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#130f40"
    },
})
