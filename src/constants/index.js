import {Dimensions} from 'react-native';
//import ICONS from './icons'
import {IMAGES} from './images'
import { COLORS ,FONTS,SIZES } from './theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const wp = (widthPerc) => {
  return SCREEN_WIDTH * widthPerc /100;
}

const hp = (heightPerc) => {
  return SCREEN_HEIGHT * heightPerc /100;
}

export{   COLORS, FONTS, SIZES, IMAGES, wp, hp}