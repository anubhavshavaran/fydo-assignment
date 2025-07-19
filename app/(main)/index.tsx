import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Location from 'expo-location';
import {Colors} from "@/constants/Colors";
import ShopScreen from "@/components/ui/ShopScreen";
import Shop from "@/constants/Shop";
import OutOfRangeScreen from "@/components/ui/OutOfRangeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRouter} from "expo-router";

const GOOGLE_PLACES_API_KEY = 'AIzaSyBZ76Rc3J2lFm_qAa4ZbfyYcQ-Z-jhLE4c';
const SEARCH_RADIUS_METERS = 300;

function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [shops, setShops] = useState<Shop[] | null>([]);
    const router = useRouter();

    const handleLocationAndFetch = async () => {
        try {
            setIsLoading(true);
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied.');
                setIsLoading(false);
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${SEARCH_RADIUS_METERS}&type=store&key=${GOOGLE_PLACES_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === 'OK' && data.results.length > 0) {
                const shops: Shop[] = data.results.map((item: any) => ({
                    place_id: item.place_id,
                    icon: item.icon,
                    name: item.name,
                    open_now: item.opening_hours ? item.opening_hours.open_now : false,
                    rating: item.rating || 0,
                    user_ratings_total: item.user_ratings_total || 0,
                    vicinity: item.vicinity,
                } as Shop));
                setShops(shops);
                setError(null);
            } else if (data.status === 'ZERO_RESULTS' || data.results.length === 0) {
                setShops([]);
                setError(null);
            } else {
                throw new Error(data.error_message || `API Error: ${data.status}`);
            }
        } catch (error) {
            setError('An error occurred while fetching shops.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        async function checkUser() {
            const token = await AsyncStorage.getItem('user');
            if (!token) {
                router.replace("/(login)")
            }
        }

        checkUser();
    }, []);

    useEffect(() => {
        handleLocationAndFetch().then();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={Colors.light.tabIconSelected}/>
                <Text style={styles.message}>Checking your location...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Location Permission Denied</Text>
                <TouchableOpacity style={styles.retryButton} onPress={handleLocationAndFetch}>
                    <Text style={styles.retryButtonText}>Give Location Permissions</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (shops && shops.length > 0) {
        return <ShopScreen shops={shops} />;
    }

    if (shops === null || shops.length === 0) {
        return <OutOfRangeScreen radius={SEARCH_RADIUS_METERS} />;
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.light.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.light.textSecondary,
        marginTop: 10,
    },
    retryButton: {
        width: '100%',
        backgroundColor: Colors.light.tabIconSelected,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    retryButtonText: {
        color: Colors.light.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Index;
