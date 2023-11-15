import styled, { css } from 'styled-components';
import colorNames from '../../styles/colors';
import sizeNames from '../../styles/sizes';

const { big, extraBig } = sizeNames;

export const MainTitle = styled.h1``;

export const SubTitle = styled.h2`
  font-size: ${big};
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => (color ? colorNames[color] : '#fff')};
  ${({ border_width, color }) =>
    border_width &&
    css`
      padding-top: 10px;
      border-bottom: ${border_width}px solid ${color ? color : '#fff'};
    `}
`;
