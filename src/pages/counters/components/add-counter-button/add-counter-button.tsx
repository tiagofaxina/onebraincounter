import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AddCountButtonProps } from './add-counter-button.interface';
import { styles } from './add-counter-button.styles';

export const AddCountButton: React.FC<AddCountButtonProps> = ({
  iconProps = {},
  ...restProps
}) => {
  return (
    <TouchableOpacity {...restProps}>
      <View style={styles.container}>
        <Icon name="add" size={60} color="white" {...iconProps} />
        <Text style={styles.title}>Add Counter</Text>
      </View>
    </TouchableOpacity>
  );
};
