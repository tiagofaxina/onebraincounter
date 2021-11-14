import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[700],
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingVertical: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue[500],
    fontFamily: fonts.text,
  },
});
