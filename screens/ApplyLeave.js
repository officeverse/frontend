import { Text, View, SafeAreaView, ScrollView  } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export default function ApplyLeave() {
  return (
    <SafeAreaView className="">
        <View className="flex-row items-center justify-center mt-8">
            <Text className="text-3xl mb-3 font-semibold">Apply Leave</Text>
        </View>

        <View>
            <View className="flex-row items-center justify-center mb-3">
                <Text>Select Type of Leave</Text>
            </View>
            <View>
                <DropDownPicker
                    items={[
                        {label: 'Item 1', value: 'item1'},
                        {label: 'Item 2', value: 'item2'},
                    ]}
                    defaultNull
                    placeholder="Please Select"
                    containerStyle={{height: 40}}
                />
            </View>
        </View>

    </SafeAreaView>
  );
}