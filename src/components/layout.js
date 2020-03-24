import styled from 'styled-components'; 
import { theme, themeColor} from './theme';
import PropTypes from 'prop-types';


export const Layout  = styled.div`
    background-color: ${theme.secColor};
    margin:0;
    min-height: 100%;
    padding: 0;
    width: 100%;    
`;

export const Box = styled.div`
    display: inline-flex;
    flex-direction: ${props => props.row ? "row" : "column"};
    justify-content: ${props => props.row ? "space-between" : "center"};
    align-items: ${props => props.align};
    min-height: ${props => props.height}px;
    background-color: ${props => props.bg || 'inherit'};
    margin: 0;
    font-size: ${props => props.fontSize || 'inherit'};
    z-index: 100;
    color: ${themeColor};
    position: relative;
    text-align: ${props => props.textAlign || theme.textAlign};
    border-radius: ${props => props.grid ? theme.borderRadius : 'none'};
    box-shadow: ${props => props.grid ? '0px 4px 10px rgba(0, 0, 0, 0.25)' : "none" };
    
    & h1 {
        font-size: 48px;
        color: ${ themeColor };
        font-family: 'Montserrat';
        font-weight: bold;
        margin-bottom: 0;
    }
    & h3 {
        font-size: 24px;
        text-transform: uppercase;
        color: ${themeColor};
    }
    & p {
        font-size: 16px;
        color: ${theme.color};
        margin-bottom: 0;
        line-height: 20px;
    } 
     & span {
        text-align: right;
        padding: 10px;
        margin-left: 20px;
        /* border-top: ${props => props.top ? '1px solid #17255a' : 'none'}; */
    }  

    & .soln {
            width: 80%;
            margin: 0 auto;
        }
    & .copyright {
        width: 200px;
        float: left;
        font-size: 8px;
        line-height: normal;
    }
    & ul {
        list-style: none;
    }
`;


export const Cage = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
    @media (max-width: 768px) {
     max-width: inherit;    
  }
   @media (max-width: 992) {
     width: 800;    
  }

`

export const Grid = styled.div`
    display: inline-grid;
    height: ${props => props.height || 'inherit'};
    text-align: ${props => props.textAlign || theme.textAlign};
    grid-template-columns: ${props => props.default};
    grid-gap: 50px;
    font-size: inherit;
    position: relative;    

  @media (max-width: 768px) {
      grid-template-columns: 1fr;
      margin: 0 auto;
  }
   @media (max-width: 992) {
      grid-template-columns: repeat(2, 1fr);
   }
  
`
export const GridWrapper = styled(Grid)`
    & :nth-child(2){
      margin-top: 30px;
  }
`

export const Nav = styled(Box)`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 height: ${props => props.height}px;
`

Grid.propTypes ={
    default: PropTypes.string.isRequired
}

