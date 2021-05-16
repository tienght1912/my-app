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
import IconFilter from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        id: '1',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 130,
        status: true,
    },
    {
        id: '2',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 130,
        status: true,
    },
    {
        id: '3',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 130,
        status: true,
    },
    {
        id: '4',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 130,
        status: true,
    },

];

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.imgItem} />
        <Text style={styles.nameFood}>{item.nameFood}</Text>
        <Text style={styles.fromFood}>{item.fromFood}</Text>
    </View>
);
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
            <View style={styles.article}>
                <Text style={styles.titleSlider}>Explore our</Text>
                <Text style={styles.titleSlider}>Delicious Offers</Text>
                <FlatList
                    style={styles.flatList}
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                // keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.line}></View>
            <View style={styles.footer}>
                <View style={styles.nearme}>
                    <Text>Near Me</Text>
                    <IconFilter
                        name="filter"
                        size={22}
                        color="#000"
                        style={styles.icon}
                    />
                </View>
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
    header: {
        flexDirection: "row",
        width: "100%",
        height: 60,
        // backgroundColor:"#a5b1c2",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 16
    },
    input: {
        borderRadius: 15,
        backgroundColor: "#000",
        height: 36,
        fontSize: 12,
        padding: 8,
        width: 240,
        marginRight: 8
    },
    icon: {
    },
    article: {
        // backgroundColor: "#900",
        height: 280,
        // borderBottomColor:"#a5b1c2",
        // borderBottomWidth:1,
    },
    titleSlider: {
        color: "#000",
        fontSize: 28,
        fontWeight: "700",
        marginHorizontal: 12,
    },
    flatList: {
        marginLeft: 12,
        marginTop: 6
    },
    item: {
        marginRight: 16
    },
    nameFood: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
        marginTop: 4,
    },
    fromFood: {
        fontSize: 16,
        color: "#000",
        opacity: 0.8,
        marginTop: 4,
    },
    imgItem: {
        width: 120,
        height: 140,
        borderRadius: 10
    },
    line: {
        backgroundColor: "#a5b1c2",
        marginHorizontal: 12,
        height: 1
    },
    footer:{
        marginHorizontal:12,
        marginTop:6
    },
    nearme:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
