import {View } from "react-native"
import Header from "../components/Header"
import CardAux from "../components/CardAux"


export default function App() {
  return (
    <View className="flex-1 bg-neutral-900">{/* Pai */} 
      <Header />
      <View className="flex-1 gap-3 mg">
        <CardAux/>
      </View>
      <View className="flex-row justify-between items-center bg-neutral-800 h-20 p-4">

      </View>
    </View>
  )
}