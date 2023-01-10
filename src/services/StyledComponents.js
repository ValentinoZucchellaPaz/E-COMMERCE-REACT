import styled from "styled-components"


export const MainContainer = styled.div`
    text-align: center;
    overflow-x: hidden;
    background-color: rgb(156 163 175);
    height: auto; 
    min-height: 100vh;
`
export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
    justify-content: center;
    align-items: center;
    height: ${props => props.height ? props.height : `auto`};
    width: ${props => props.width ? props.width : '100vw'};
    border: ${props => props.border ? `${props.border}; border-radius: 8px` : 'none'};
    padding: ${props => props.padding ? props.padding : '20px'};
    gap: 5px;
`
export const Title = styled.h2`
    ${props => props.primary ?
            `text-transform: uppercase;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;`
            : `font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 600;`}
    ${props => props.capitalize && 'text-transform: capitalize;'}
    ${props => props.cursor && 'cursor: pointer; user-select: none; :hover{font-weight: 900;}'}
`

export const Subtitle = styled.p`
    color: rgb(31 41 55);
    font-style: italic;
    margin: 0 .25rem;
    font-size: 0.75rem;
    line-height: 1rem;
`

export const Button = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 40px;
    min-width: 3rem;
    margin: 4px 0;
    padding: 4px;
    border: ${props => props.border ? 'solid 1px rgba(255, 255, 255, 0.4)' : 'none'};
    background-color: transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: all .25s;
    text-transform: uppercase;
    color: ${props => props.textColor};

    :hover {
        border: transparent;
        background-color: #7A26C1;
    }

    :active {
        transform: translateY(2px);
    }
    `

export const Header = styled.header`
    background-color: #282c34;
    height: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    transition: all .25s;

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: 70px 80px 50px;
        overflow: hidden;
    }
`
export const Logo = styled.img`
    height:36px
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }
`

export const NavbarLink = styled.button`
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    font-weight: 600;
    transition: all .25s;
    background-color: transparent;
    border: none;

    :hover {
        color: #7A26C1;
        animation: pulse 2s infinite;
    }

    :active {
        transform: translateY(2px);
    }

    @keyframes pulse {
        50% {
            opacity: .5;
        }
    }
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 10px;
    width: 80vw;
    margin: auto;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (min-width: 1536px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
        width: 65vw;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 12rem;
    height: 18rem;
    margin: auto;
    border-radius: 8px;
    position: relative;
    border: solid 1px rgb(107 114 128);
    transition: all .25s;
    :hover {
        border: solid 1px rgb(87 94 108);
    }
`
export const CardImage = styled.img`
    height: 66%;
    border-radius: 8px;
    margin-bottom: 10px;
`