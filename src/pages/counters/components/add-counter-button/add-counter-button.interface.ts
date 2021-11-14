import { TouchableOpacityProps } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

export type AddCountButtonProps = TouchableOpacityProps & {
  iconProps?: Omit<IconProps, 'name' | 'size' | 'color'>;
};
