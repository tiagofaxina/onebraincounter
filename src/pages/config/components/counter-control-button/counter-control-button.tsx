import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CounterControlButtonProps } from './counter-control-button.interface';

export const CounterControlButton: React.FC<CounterControlButtonProps> = ({
  name,
  size = 60,
  color = 'white',
  iconProps = {},
  ...restProps
}) => {
  return (
    <TouchableOpacity {...restProps}>
      <Icon name={name} size={size} color={color} {...iconProps} />
    </TouchableOpacity>
  );
};
