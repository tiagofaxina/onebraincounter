import React from 'react';
import { ActivityIndicator } from 'react-native';
import { OverlaySpinnerProps } from './overlay-spinner.interface';
import { styles } from './overlay-spinner.styles';

export const OverlaySpinner: React.FC<OverlaySpinnerProps> = ({
  ...restProps
}) => {
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      color="#E1E1E1"
      {...restProps}
    />
  );
};
