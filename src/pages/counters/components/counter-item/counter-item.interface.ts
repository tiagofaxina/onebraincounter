import { TouchableOpacityProps, ViewProps } from 'react-native';

export type CounterItemProps = TouchableOpacityProps & {
  title: string;
  count: number;
  isActive?: boolean;
  containerProps?: ViewProps;
};
