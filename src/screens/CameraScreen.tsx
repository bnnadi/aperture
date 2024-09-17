import React, { createRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'react-native-camera-kit';

export default function CameraScreen() {
    let camera = createRef();
    return (
        <View style={styles.root}>
            <Text>Camera Screen </Text>
            <View>
                <Camera
                    ref={(ref: any) => (camera = ref)}
                    cameraType={CameraType.Back} // front/back(default)
                    flashMode="auto"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});