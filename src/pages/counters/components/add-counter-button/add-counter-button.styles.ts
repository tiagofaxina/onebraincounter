import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.gray[200],
    fontSize: 32,
    fontWeight: 'bold',
  },
  counterList: {},
  counter: {
    marginBottom: 36,
  },
});
