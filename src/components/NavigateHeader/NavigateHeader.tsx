import React from 'react';
import {StatusBar, View} from 'react-native';
import {CustomButton, CustomText} from '..';
import {DEVICE_SCREEN_WIDTH, StatusBarHeight} from '../../utils/device-info';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface INavigateHeaderProps {
  navigation: {
    goBack(): void;
  };
}

export default function NavigateHeader({
  navigation: {goBack},
}: INavigateHeaderProps) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          marginTop: StatusBarHeight + 8,
          alignItems: 'flex-start',
          flexDirection: 'row',
          paddingHorizontal: 16,
          backgroundColor: 'white',
          paddingVertical: 8,
        }}>
        <CustomButton onPress={goBack}>
          <AntDesign name="left" size={24} />
        </CustomButton>
        <CustomText
          marginBottom={8}
          fontWeight="bold"
          fontSize={18}
          marginLeft={DEVICE_SCREEN_WIDTH / 3.7}>
          Nova dívida
        </CustomText>
      </View>
    </>
  );
}
