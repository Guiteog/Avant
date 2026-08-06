import { Modal, View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {CirclePlus, X, Check} from "lucide-react-native";
import { parseToRgba,rgba } from 'color2k';



type DataModal = {
    visivel: boolean;
    onFechar: () => void;
    onSalvar: (dados : {nomeMesa: string; aux: number; nomeAux: string }) => void //Nome canal, aux, cor
}

const CORES_DISPONIVEIS = ['#FF4242', '#FF8C00', '#FFD700', '#22C55E', '#14B8A6', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'];

export default function ModalAdd({ visivel, onFechar, onSalvar }: DataModal) {

    const [corSelecionada, setCorSelecionada] = useState(CORES_DISPONIVEIS[0])
    const [r, g, b] = parseToRgba(corSelecionada);
    const corHex = rgba(r, g, b, 0.4)
    return (
        <Modal visible={visivel} animationType="fade" transparent statusBarTranslucent navigationBarTranslucent={true}>
            <View className="w-full h-full justify-end items-center bg-black/50">
                {/* Borda Linear*/}
                <LinearGradient colors={[corSelecionada, corHex, 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 0.6, y: 0.7 }} className="rounded-t-3xl overflow-hidden p-[1.5px]">

                    {/* Conteúdo do Modal */}
                    <View className="w-[32rem] h-96 flex-col items-start bg-neutral-800 rounded-t-3xl px-3 pt-3">
                        
                        {/* Header */}
                        <View className="w-full h-1/4 flex-row justify-between items-start ">
                            
                            {/* Icon de add */}
                            <View><CirclePlus color={corSelecionada} size={40} strokeWidth={1.5} /></View>

                            {/* Texto */}
                            <View className="flex-1 flex-col pl-3 justify-center gap-1 mt-2">
                                <Text className="text-gray-100 text-xl font-semibold ">Adicionar AUX</Text>
                                <Text className="text-gray-400 text-sm font-semibold ">Configure as informações do novo AUX</Text>
                            </View>

                            {/* Botão de fechar */}
                            <Pressable onPress={onFechar} className="p-1 border border-gray-700 rounded-full">
                                {({ pressed }) => (<X color={pressed ? '#FFFFFF' : '#CFCED0'} size={22} />)}
                            </Pressable>
                        </View>

                        {/* Formulário */}
                        <ScrollView className="h-full w-full mt-2" contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                            <View className="flex-col gap-3 mt-4">
                            
                            {/* Nome da Mesa */}
                            <View className="flex-col gap-1">
                                <Text className="text-gray-100 text-lg font-medium ">Nome da Mesa</Text>
                                <TextInput className="w-4/5 h-14 rounded-lg border border-gray-600 px-3 py-2 text-gray-700 text-base font-medium" placeholder="Digite o nome da mesa" placeholderTextColor="#9CA3AF" />

                            </View>

                            {/* Cores Disponíveis */}
                            <View className="flex-row gap-3 mt-2">
                                {CORES_DISPONIVEIS.map((cor, index) => (
                                    <Pressable key={index} onPress={() => setCorSelecionada(cor)}>
                                        <View className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: cor }}>
                                            {cor === corSelecionada && <Check color="white" size={24} strokeWidth={4}/>}
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                        </ScrollView>
                        

                        {/* Botão de salvar */}
                        <View className="h-11 w-full justify-end items-center pb-3 bg-white">
                            <Pressable onPress={() => onSalvar({ nomeMesa: 'Novo AUX', aux: 1, nomeAux: 'Canal Aux' })}>

                            </Pressable>
                        </View>



                    </View>
                </LinearGradient>
                
            </View>
            
        </Modal>
    )
}