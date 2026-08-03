import { View, Text, Pressable } from "react-native"
import { BlurView } from "expo-blur"
import { Settings } from "lucide-react-native"
import { Pencil } from "lucide-react-native"

// objetos
type CardAuxProps = {
    nome: string,
    color: string,
    nomeCanal: string,
}

export default function CardAux({ nome, color, nomeCanal }: CardAuxProps) {
    return (
        
        <View className="w-[21.8rem] aspect-[1.5] rounded-2xl p-1">
            {/* Parte externa do card */}
            <View className="flex-1 rounded-2xl overflow-hidden p-2" style={{ boxShadow: '-6px 6px 24px -4px rgba(255,66,66,0.4)' }}>               
                {/* 1 - Camada (Desfoque)*/}
                <View className="absolute inset-0 bg-neutral-600/10" style={{ boxShadow: 'inset 0 0 18px #FF4242' }}/>
                <BlurView intensity={80} tint="dark" className="absolute inset-0" />

                {/* 2 - Camada (Conteúdo Principal) */}
                <View className="flex-1 pl-5 pr-2 pt-2 pb-5">

                    {/* Config */}
                    <View className="flex-[1] flex-row  ">
                        <View className="items-end flex-1 ">
                            <Pressable onPress={() => console.log('Abrir configurações')} hitSlop={12}>
                                {({ pressed }) => (<Settings color={pressed ? '#FFFFFF' : '#CFCED0'} size={24} />)}
                            </Pressable>                   
                        </View>
                    </View>
                    
                    {/* Textos */}
                    <View className="flex-[3]">
                        <View className="items-start justify-start py-1 h-full w-full ">
                            <Text className="text-red-700 text-lg font-bold">{nomeCanal}</Text>
                            <Text className="text-red-700 text-4xl font-bold ">{nome}</Text>
                        </View> 
                    </View>
                    
                    {/* Buttons */}
                    <View className="flex-[1] ">
                        <View className="flex-row justify-between">
                            {/* Enter */}
                            <Pressable onPress={() => console.log('Abrir Teclado')} className="border-2 border-gray-500 border-solid rounded-2xl px-5 py-2">
                                {({ pressed }) => (<Text className={`text-gray-200 text-lg font-bold ${pressed ? 'opacity-70' : 'opacity-100'}`}>Enter</Text>)}
                            </Pressable>

                            {/* Personalizar */}
                            <Pressable onPress={() => console.log('Abrir Aux Hub')} className="border-2 border-gray-500 border-solid h-12 w-12 rounded-full justify-center items-center">
                                {({ pressed }) => (<Pencil color={pressed ? '#FFFFFF' : '#CFCED0'} size={22} />)}
                            </Pressable>
                        </View>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}