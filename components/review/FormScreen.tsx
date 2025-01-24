import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleSave = () => {
    console.log('Số liệu đã nhập:', value);
    alert('Đã lưu số liệu!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên công trình: Công trình A</Text>
      <Text style={styles.label}>Số giấy phép: GP123</Text>

      <Text style={styles.label}>Lưu lượng khai thác của từng giếng:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        placeholder="Nhập số..."
      />
       <Text style={styles.label}>Mực nước trong giếng khai thác:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        placeholder="Nhập số..."
      />
       <Text style={styles.label}>Mực nước trong giếng quan trắc:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        placeholder="Nhập số..."
      />
      <Button title="Gửi dữ liệu" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default FormScreen;
