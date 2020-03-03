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
    height: ${props => props.height}px;
    background-color: ${props => props.bg || 'inherit'};
    margin: 0;
    font-size: ${props => props.fontSize || 'inherit'};
    z-index: 100;
    color: ${themeColor};
    position: relative;
    text-align: ${props => props.textAlign || theme.textAlign};
    /* padding: ${props => props.pad || 0 }; */
    border-radius: ${props => props.grid ? '5px' : 'none'};
    box-shadow: ${props => props.grid ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : "none" }; 
    
    & h1 {
        font-size: 48px;
        color: ${ themeColor };
        font-family: 'Montserrat';
        font-weight: bold;
    }
    & h3 {
        font-size: 24px;
        text-transform: uppercase;
        color: ${themeColor};
    }
    & p {
        font-size: 16px;
        color: ${theme.color};
    } 
     & span {
        text-align: right;
        padding: 10px;
        margin-left: 20px
    }  

    & .soln {
            width: 70%;
            margin: 0 auto;
        }
    & ul {
        list-style: none;
    }
`;


export const Cage = styled.div`
    width: 1100px;
    margin: 0 auto;
    height: 100%;
`
export const HomeWrapper = styled.div`
    height: 100%;
    margin: 0;
    overflow: hidden;
    width: 100%;
    position: relative;
    &::before {
        background-color: ${themeColor};
        content: "";
        border-radius: 15px;
        position: absolute;
        height: 60%;
        width: 100%;
        bottom: -9%;
        right: 8%;            
        transform: rotate(5deg)
    }  
      
`
export const DarkWrapper = styled.div`
    display: inline-flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${themeColor};

    & p {
        width: 30%;
        padding: 20px;
        color: #fff;
    }
`
export const Grid = styled.div`
    display: inline-grid;
    height: ${props => props.height || 'inherit'};
    text-align: ${props => props.textAlign || theme.textAlign};
    grid-gap: 50px;
    grid-template-columns: ${props => props.default};  
    font-size: inherit;
    position: relative;    

  /* & :nth-child(2){
      margin-top: 30px;
  } */
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

