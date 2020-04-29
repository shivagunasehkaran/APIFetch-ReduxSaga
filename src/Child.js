import React from 'react';
import { View, Text } from 'react-native';

const Child = (props) => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>{'Name:'} {props.name}</Text>
        </View>
    );
};

export default Child;