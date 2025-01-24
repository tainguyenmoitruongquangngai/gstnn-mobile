import {StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 15
    },

})
const CustormerScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>

            <Text style={styles.reviewText}>Tên công trình: Công trình A</Text>
            <Text style={styles.reviewText}>Địa chỉ: Quảng Ngãi </Text>
            <Text style={styles.reviewText}>Số điện thoại: 0124124</Text>
            <Text style={styles.reviewText}>Số giấy phép : GP123 </Text>


        </View>
    )
}

export default CustormerScreen;