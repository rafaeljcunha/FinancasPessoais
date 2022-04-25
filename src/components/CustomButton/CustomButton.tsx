import styled from 'styled-components/native';

interface IButtonProps {
  bgColor: string;
  paddingHorizontal: number;
  paddingVertical: number;
  borderRadius: number;
}

export const Button = styled.TouchableOpacity<Partial<IButtonProps>>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({bgColor}) => bgColor};
  padding-horizontal: ${({paddingHorizontal}) => paddingHorizontal}px;
  padding-vertical: ${({paddingVertical}) => paddingVertical}px;
  border-radius: ${({borderRadius}) => borderRadius}px;
`;
