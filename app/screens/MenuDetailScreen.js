import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Menu Detail Screen</Text>
            {/* Add your menu detail screen components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MenuDetailScreen;
