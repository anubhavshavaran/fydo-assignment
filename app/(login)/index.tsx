import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
import { Image } from 'expo-image';
import {Colors} from "@/constants/Colors";
import {useNavigation} from "expo-router";

const { height } = Dimensions.get('window');

function Index() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#000" />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('@/assets/images/LandingImage.png')}
                        style={styles.image}
                        contentFit="fill"
                    />
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Your City, Unlocked!</Text>
                    <Text style={styles.subtitle}>
                        Discover the best shops and services right around the corner.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Index;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        height: height * 0.75,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        height: height * 0.3,
        backgroundColor: Colors.light.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        transform: [{ translateY: -1 * height * 0.05 }],
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        backgroundColor: Colors.light.tabIconSelected,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
