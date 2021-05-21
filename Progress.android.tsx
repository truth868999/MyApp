import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ProgressBarAndroid } from '@react-native-community/progress-bar-android';

interface Props {
  progress: number;
  color: string;
  style: ViewStyle;
}

export default function Progress(props: Props) {
  return (
    <View style={props.style}>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        progress={props.progress}
        indeterminate={false}
        color={props.color}
      />
    </View>
  );
}

Progress.defaultProps = {
  color: '#009988',
}

export const foo = 42 as const;