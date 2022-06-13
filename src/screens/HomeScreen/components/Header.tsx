import React from 'react';
import {IMAGES} from '../../../assets/tokens/images';
import {CustomText} from '../../../components';
import {
  Avatar,
  HeaderContent,
  HeaderAvatarWrapper,
  HeaderWrapper,
  HeaderGreetingWrapper,
} from './styles';

export function HomeHeader() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderAvatarWrapper>
          <Avatar source={IMAGES.avatar} />
        </HeaderAvatarWrapper>
        <HeaderGreetingWrapper>
          <CustomText fontSize={18} color="white">
            Olá
          </CustomText>
          <CustomText fontSize={18} color="white" fontWeight="bold">
            Rafael
          </CustomText>
        </HeaderGreetingWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
}
