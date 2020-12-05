import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/toorist.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 80,
    marginBottom: 30, //12
  },
});

export default memo(Logo);
