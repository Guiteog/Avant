import { View, Text, Pressable } from "react-native";
import {Plus} from "lucide-react-native";

export default function CardAdd() {
    return (
        
        <Pressable className="w-[21.8rem] aspect-[1.5] rounded-2xl p-1" onPress={() => console.log('Add Aux')}>
            {/* Conteúdo */}
            <View className="flex-1 border border-neutral-600 rounded-2xl justify-center items-center">               
                {/* SVG */}
                <View className="flex-1/2 items-center justify-center pb-1">
                    <Plus color="#CFCED0" size={52} strokeWidth={2} />
                </View>
                {/* Texto */}
                <View className="flex-1/2 items-center justify-center">
                    <Text className="text-gray-200 text-lg font-bold">Add Aux</Text>
                    <Text className="text-gray-400 text-sm font-bold">Tap to add</Text>
                </View>
            </View>
        </Pressable>
    )
}