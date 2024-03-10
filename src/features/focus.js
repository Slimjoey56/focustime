import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import{spacing} from '../utils/sizes';
export const Focus = ({addSubject}) => {
  const [subject, setsubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setsubject}
          label="What will you like to focus please?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50}  onPress={()=> addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
});
