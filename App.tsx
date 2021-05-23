import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    backgroundColor: 'black',
    height: 32,
  },
});

const {width: screenWidth} = Dimensions.get('screen');

export default function App() {
  const [width, setWidth] = React.useState(1);
  React.useEffect(() => {
    const id = setInterval(() => {
      if (width < screenWidth - 64) {
        console.log(width + "前");
        setWidth(width + 1);
        console.log(width + "あと");
      } else {
        clearInterval(id);
        console.log(width + "elseのあと");
      }
    }, 1000 / 60);
    return () => {
      clearInterval(id);
    };
  },[]);

  return (
    <View style={styles.container}>
      <View style={[styles.block, {width}]} />
    </View>
  );
}

