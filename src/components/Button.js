import styled  from 'styled-components'; 
import { theme, themeColor } from './theme';

export const Button = styled.button`
    padding: 15px;
    width: 200px;
    color: #fff;
    background-color: ${themeColor};
    border: none;
    border-radius: ${theme.borderRadius};
    font-size: 16px;
`