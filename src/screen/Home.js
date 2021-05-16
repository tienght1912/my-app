import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    FlatList,
    TextInput,
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
    return (
        <View style={styles.container}>
            <Icon name="fastfood" size={30} color="#900" />
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
