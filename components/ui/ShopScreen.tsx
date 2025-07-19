import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Colors} from "@/constants/Colors";
import Shop from "@/constants/Shop";
import {Image} from "expo-image";
import {Feather} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ShopScreenProps = {
    shops: Shop[];
};

function ShopItem({icon, name, open_now, user_ratings_total, rating, vicinity}: Shop) {
    const vicinityDisplay = vicinity.length > 35
        ? `${vicinity.substring(0, 35)}...`
        : vicinity;
    return (
        <View style={styles.shopCard}>
            <Image source={{uri: icon}} style={styles.shopImage}/>
            <View>
                <Text style={styles.shopName}>{name}</Text>
                <Text style={styles.shopStatus}>{open_now ? 'Shop is open' : 'Shop is closed'}</Text>
                <Text style={styles.shopRating}>Rating: {rating} ({user_ratings_total})</Text>
                <Text style={styles.shopVicinity} ellipsizeMode={"tail"}>{vicinityDisplay}</Text>
            </View>
        </View>
    );
}

function ShopScreen({shops}: ShopScreenProps) {
    const router = useRouter();

    async function handleLogout(){
        await AsyncStorage.removeItem('user');
        router.replace('/(login)');
    }

    return (
        <View style={styles.container}>
            <View style={styles.screenHeader}>
                <Text style={styles.title}>Shops Near You</Text>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                    <Feather name="log-out" size={24} color={Colors.light.textSecondary} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={shops}
                keyExtractor={(item) => item.place_id}
                renderItem={({item}) => (
                    <ShopItem place_id={item.place_id} icon={item.icon} name={item.name} open_now={item.open_now}
                              rating={item.rating} vicinity={item.vicinity} user_ratings_total={item.user_ratings_total}/>
                )}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.light.background,
    },
    screenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    logoutButton: {
        padding: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.light.tabIconSelected,
        marginBottom: 20,
    },
    shopCard: {
        width: '100%',
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    shopImage: {width: 60, height: 60, borderRadius: 10},
    shopName: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.light.tabIconSelected,
    },
    shopStatus: {
        fontSize: 16,
        fontWeight: '600',
    },
    shopRating: {
        fontSize: 16,
        fontWeight: '600',
    },
    shopVicinity: {
        fontSize: 14,
        color: Colors.light.textPrimary,
        marginTop: 4,
    },
});

export default ShopScreen;