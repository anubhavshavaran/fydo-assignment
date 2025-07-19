import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Colors} from "@/constants/Colors";

type OutOfRangeScreenProps = {
    radius: number;
}

function OutOfRangeScreen({radius}: OutOfRangeScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sorry!</Text>
            <Text style={styles.message}>We couldn&#39;t find any operational shops within {radius}m of your location.</Text>
        </View>
    );
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
})

export default OutOfRangeScreen;
