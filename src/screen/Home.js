import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgHome}
                source={require('../asset/427735.png')}
            />
            <Text style={styles.title}>Tiếng HT</Text>
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
