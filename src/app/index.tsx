import { View } from "react-native"
import CardAux from "../components/CardAux"
import Header from "../components/Header"


export default function App() {
  return (
    <View className="flex-1 bg-neutral-900">{/* Pai */} 
      {/* Header - Logo centralizado */}
      <Header />
      {/* Cards de retorno */}
      <View className="flex-row flex-wrap flex-1 p-3">
        < CardAux />
      </View>
    </View>
  )
}