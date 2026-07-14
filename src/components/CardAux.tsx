import { View, Text } from "react-native"
import { BlurView } from "expo-blur"

export default function CardAux() {
    return (
        
        <View className="w-80 h-56 shadow-[0_-25px_8px_rgba(255,66,66,1)]">
            <View className="flex-1 rounded-2xl overflow-hidden">
                <View className="absolute inset-0 bg-neutral-700/20" style={{ boxShadow: 'inset 0 0 18px #FF4242' }}/>
                <BlurView intensity={40} tint="dark" className="absolute inset-0" />
                <View className="p-3">
                    <Text className="text-white">CardAux</Text>
                </View>
            </View>
        </View>
    )
}
// style={{ boxShadow: '-6px 6px 10px -4px rgba(255,66,66,0.9)' }}