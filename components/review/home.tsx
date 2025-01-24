import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/app.navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const menuItems = [
    { name: 'Thu thập', icon: 'edit', color: '#FFD700' },
    { name: 'Kiểm tra', icon: 'check-circle', color: '#87CEFA' },
    { name: 'Ghi chỉ số', icon: 'palette', color: '#98FB98', action: () => navigation.navigate('form') },
    { name: 'Ghi chỉ số trực tuyến', icon: 'cloud-upload', color: '#87CEEB' },
    { name: 'Tổng hợp', icon: 'list', color: '#FFB6C1' },
    { name: 'Tra cứu khách hàng', icon: 'search', color: '#FFA500',action: () => navigation.navigate('custormer_info') },
    { name: 'Quản lý hình ảnh', icon: 'photo', color: '#1E90FF' },
    { name: 'Trợ giúp', icon: 'help', color: '#FF6347' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trang chủ</Text>
      <FlatGrid
        itemDimension={130}
        data={menuItems}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, { backgroundColor: item.color }]}
            onPress={item.action} // Gọi action khi bấm vào
          >
            <MaterialIcons name={item.icon} size={40} color="#fff" />
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
