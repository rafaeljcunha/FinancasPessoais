import styled from 'styled-components/native';

interface ITextProps {
  fontWeight: 'bold' | 'normal';
  color: string;
  textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify';
  marginRight: number;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
  fontSize: number;
  lineHeight: number;
}

export const CustomText = styled.Text<Partial<ITextProps>>`
  font-size: ${({fontSize = 16}) => fontSize}px;
  line-height: ${({lineHeight = 24}) => lineHeight}px;
  font-weight: ${({fontWeight = 'normal'}) => fontWeight};
  color: ${({color}) => color || 'black'};
  text-align: ${({textAlign = 'left'}) => textAlign};
  margin-right: ${({marginRight = 0}) => marginRight}px;
  margin-left: ${({marginLeft = 0}) => marginLeft}px;
  margin-top: ${({marginTop = 0}) => marginTop}px;
  margin-bottom: ${({marginBottom = 0}) => marginBottom}px;
`;
