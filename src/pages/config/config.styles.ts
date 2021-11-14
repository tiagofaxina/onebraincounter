import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: colors.blue[800],
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
  },
  actionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 24,
  },
});
