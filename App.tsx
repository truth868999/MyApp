import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  label: {
    height: 400,
  },
});

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

export default function App() {
  return (
    <ScrollView>
      {data.map(item => (
        <Text style={styles.label}>{item.title}</Text>
      ))}
    </ScrollView>
  );
}

