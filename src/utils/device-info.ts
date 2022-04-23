import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const DEVICE_SCREEN_HEIGHT = Dimensions.get('screen').height;
export const DEVICE_SCREEN_WIDTH = Dimensions.get('screen').width;

export const StatusBarHeight = getStatusBarHeight();
