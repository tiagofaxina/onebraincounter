import { TouchableOpacityProps } from 'react-native';

export type ResetButtonProps = Omit<TouchableOpacityProps, 'onPress'> & {
  counterId: string;
  onPress?: () => void;
};
