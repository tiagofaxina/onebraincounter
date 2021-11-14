import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: colors.blue[800],
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
  countersContainer: {},
  title: {
    fontSize: 22,
    fontWeight: '900',
  },
  actionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 24,
  },
  selectedCounterContainer: {},
  selectedCounterData: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#d1d1d1',

    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: 48,
    paddingVertical: 12,
  },
  selectedCountContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  selectedCounterName: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.gray[200],
  },
  selectedCounterActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
