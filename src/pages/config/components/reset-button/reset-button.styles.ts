import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.blue[800],
    margin: 0,
  },
});
