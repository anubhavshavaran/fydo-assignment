import React from 'react';
import {ActivityIndicator, View, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.light.tabIconSelected} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    }
})

export default Loader;