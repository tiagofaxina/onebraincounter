import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: colors.blue[500],
  },
  counterList: {},
  counter: {
    marginBottom: 36,
    opacity: 0.6,
  },
  active: {
    opacity: 1,
  },
});
