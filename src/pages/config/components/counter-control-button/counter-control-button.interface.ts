import { TouchableOpacityProps } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

export type CounterControlButtonProps = TouchableOpacityProps & {
  name: string;
  size?: number;
  color?: string;
  counterId: string;
  iconProps?: Omit<IconProps, 'name' | 'size' | 'color'>;
};
