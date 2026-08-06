import { View } from "react-native"
import { useState } from "react";
import CardAux from "../components/CardAux"
import Header from "../components/Header"
import CardAdd from "../components/CardAdd"
import ModalAdd from "../components/ModalAdd"


export default function App() {

  //Modal Add - Estado para controlar a visibilidade do modal
  const [modalVisivel, setModalVisivel] = useState(false);

  //Modal Add - Função para lidar com os dados recebidos do modal
  function dadosAux(dados: { nome: string; aux: number; nomeAux: string }) {
        console.log('Salvando novo AUX:', dados);
        setModalVisivel(false);
    }
    
  return (
    <View className="flex-1 bg-neutral-900">{/* Pai */} 
      {/* Header - Logo centralizado */}
      <Header />

      {/* Cards de retorno */}
      <View className="flex-row flex-1 p-3 items-start">

        <View className="flex-row items-center gap-4">

          <CardAux nome="Aux Hub" color="red" nomeCanal="Canal Aux" />

          <CardAdd onPress={() => setModalVisivel(true)}/>

          <ModalAdd visivel={modalVisivel} onFechar={() => setModalVisivel(false)} onSalvar={dadosAux} />

        </View>   

      </View>

    </View>
  )
}