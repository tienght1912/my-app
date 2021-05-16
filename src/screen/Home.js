import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import IconNoti from 'react-native-vector-icons/Ionicons';
import IconFilter from 'react-native-vector-icons/FontAwesome';
import IconAddress from 'react-native-vector-icons/MaterialIcons';
import Dot from 'react-native-vector-icons/Entypo';
const DATA = [
    {
        id: '1',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 50,
        unit: "$",
        rating: 5,
        amount: 20,
        fav: true,
        address: 'Corso Gaetano Scirea, 50, 10151 Torino TO, Italy'
    },
    {
        id: '2',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 50,
        unit: "$",
        rating: 1,
        amount: 0,
        fav: true,
        address: 'Corso Gaetano Scirea, 50, 10151 Torino TO, Italy'
    },
    {
        id: '3',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 50,
        unit: "$",
        rating: 5,
        amount: 20,
        fav: true,
        address: 'Corso Gaetano Scirea, 50, 10151 Torino TO, Italy'
    },
    {
        id: '4',
        nameFood: 'Spaghetti',
        image: 'https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-114.jpg',
        fromFood: 'Italy',
        cost: 50,
        unit: "$",
        rating: 5,
        amount: 30,
        fav: true,
        address: 'Corso Gaetano Scirea, 50, 10151 Torino TO, Italy'
    },

];

const renderItemH = ({ item }) => (
    <View style={styles.itemH}>
        <Image source={{ uri: item.image }} style={styles.imgItem} />
        <Text style={styles.nameFoodH}>{item.nameFood}</Text>
        <Text style={styles.fromFoodH}>{item.fromFood}</Text>
    </View>
);
const renderItemV = ({ item }) => (
    <TouchableOpacity
        style={styles.itemV}
        onPress={() => navigation.navigate('Detail', item)}
    >
        <Image source={{ uri: item.image }} style={styles.imgItem} />
        <View style={styles.boxV}>
            <Text style={styles.nameFoodV}>{item.nameFood}</Text>
            <Text style={styles.fromFoodV}>{item.fromFood}</Text>
            <Text style={styles.cost}>{item.cost}{item.unit}</Text>
            <Text style={styles.address}>
                <IconAddress
                    name="place"
                    size={8}
                    color="#a5b1c2"
                    style={styles.iaddress} />
                {item.address}
            </Text>
        </View>
        <Dot
            name="dot-single"
            size={42}
            color={item.amount === 0 ? 'red' : 'green'}
            style={styles.dotstatus}
        />
    </TouchableOpacity>
);

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
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
                        style={styles.flatListH}
                        data={DATA}
                        renderItem={renderItemH}
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
                    <FlatList
                        style={styles.flatListV}
                        data={DATA}
                        renderItem={renderItemV}
                    />
                </View>
            </ScrollView>
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
        height: 28,
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
    flatListH: {
        marginLeft: 12,
        marginTop: 6
    },
    itemH: {
        marginRight: 16
    },
    nameFoodH: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
        marginTop: 4,
    },
    fromFoodH: {
        fontSize: 16,
        color: "#000",
        opacity: 0.8,
        marginTop: 4,
    },
    imgItem: {
        width: 100,
        height: 120,
        borderRadius: 10
    },
    itemV: {
        flexDirection: "row",
        marginBottom: 12,
    },
    boxV: {
        marginLeft: 12,
        paddingVertical: 8,
        width: 160
    },
    nameFoodV: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
    },
    fromFoodV: {
        fontSize: 16,
        color: "#000",
        opacity: 0.8,
        marginTop: 4,
    },
    cost: {
        color: "#900",
        fontSize: 16,
        marginTop: 4
    },
    address: {
        color: "#a5b1c2",
    },
    dotstatus: {
        alignSelf: "flex-end",
        marginBottom: 100
    },
    line: {
        backgroundColor: "#a5b1c2",
        marginHorizontal: 12,
        height: 1
    },
    footer: {
        marginHorizontal: 12,
        marginTop: 6
    },
    nearme: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
