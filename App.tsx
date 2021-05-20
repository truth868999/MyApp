import React from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myComponent: {
    width: 256,
    height: 32,
  }
});

interface Props {
  style?: ViewStyle;
}
function MyCompnent(props: Props) {
  const style = React.useMemo(
    () => StyleSheet.compose(styles.myComponent, props.style),
    [props.style],
  );
  return (
    <View style={style}>
      <Text>スタイル指定可能なコンポーネント</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <MyCompnent style={{backgroundColor: 'red'}} />
    </View>
  );
}

