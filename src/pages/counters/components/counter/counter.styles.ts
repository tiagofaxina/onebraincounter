import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[700],
    borderWidth: 2,
    borderRadius: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.gray[500],
    lineHeight: 34,
    letterSpacing: 1,
  },
  count: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 60,
    color: colors.gray[800],
    marginTop: 32,
  },
});
