import styled from 'styled-components'

import { FadeYUp } from '../helpers/Animations';

const StyledLogo = styled.div`
    opacity: 0;
    animation: ${FadeYUp} .6s ${props => props.theme.transition.function} forwards;
    color: white;
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    font-size: 36px;
    display: flex;
    align-items: flex-end;
    position: relative;
    @media (max-width: ${props => props.theme.screen.tablet}){
        font-size: 32px;
    }
    span {
        color: ${props => props.theme.colors.orange};
        line-height: 110%;
    }
`

const Logo = () => {
    return (
        <StyledLogo>To<span>Do</span></StyledLogo>
    )
}

export default Logo;