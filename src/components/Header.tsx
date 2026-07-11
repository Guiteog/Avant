import {Image, View} from 'react-native';

export default function Header() {
  return (
    <View className="w-full h-[7rem] items-center justify-center bg-neutral-900">
      <Image
        source={require('../../assets/images/logo.png')}
        className="h-full aspect-[1060/591]"
      />
    </View>
  );
}