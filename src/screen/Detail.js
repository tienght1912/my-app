import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-elements';

export default function Detail() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail</Text>

            <AirbnbRating
                count={5}
                reviews={["", "", "", "", "",]}
                defaultRating={5}
                size={16}
            />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "#900",
        fontSize: 36,
        fontWeight: "700"
    },
})
