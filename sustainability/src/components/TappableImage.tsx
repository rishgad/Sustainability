import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
type Props = {
  onTap: (appliance: string) => void;
};
const TappableImage = ({ onTap }: Props) => (
  <TouchableOpacity onPress={() => onTap('sink')}>
    <Image source={require('../assets/kitchenImage.png')} />
  </TouchableOpacity>
);
export default TappableImage;