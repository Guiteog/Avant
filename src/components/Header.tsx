import { View } from 'react-native';
import Logo from '../../assets/images/logo.svg';



export default function Header() {
  return (
    <View className="w-full h-[7rem] items-center justify-center bg-neutral-900">
      <View className="h-12 aspect-[754/140]">
        <Logo width="100%" height="100%" />
      </View>
    </View>
  );
}