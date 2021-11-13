import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/routes';

export type Counter = {
  id: string;
  name: string;
  count: number;
};

export type CountersProps = NativeStackScreenProps<
  RootStackParamList,
  'Counters'
>;
