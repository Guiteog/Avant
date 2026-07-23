import { View } from "react-native"
import CardAux from "../components/CardAux"
import Header from "../components/Header"
import CardAdd from "../components/CardAdd"


export default function App() {
  return (
    <View className="flex-1 bg-neutral-900">{/* Pai */} 
      {/* Header - Logo centralizado */}
      <Header />
      {/* Cards de retorno */}
      <View className="flex-row flex-1 p-3 items-start">
        <View className="flex-row items-center gap-4">
          <CardAux nome="Aux Hub" color="red" nomeCanal="Canal Aux" />
          <CardAdd/>
        </View>     
      </View>
    </View>
  )
}