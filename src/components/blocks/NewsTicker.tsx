import styled from 'styled-components'
import Ticker from 'react-ticker'

import { MoveYUp } from '../helpers/Animations';
import { useRandomNews } from 'hooks/useRandomNews';

const StyledNewsTicker = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 0px;
    height: 40px;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.timing};
    @media (max-width: ${props => props.theme.screen.tablet}){
        position: static;
    }
`

const StyledNewsInner = styled.div`
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0;
    position: absolute;
    background: ${props => props.theme.colors.greyDark};
    animation-delay: .2s;
    animation: ${MoveYUp} .6s ${props => props.theme.transition.function} forwards;
    box-shadow: 0px -1px 7px rgba(0,0,0,.4);
    & > span {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;
        text-transform: uppercase;
        background: ${props => props.theme.colors.orange};
        font-weight: 500;
        z-index: 1;
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        position: relative;
        height: auto;
        box-shadow: 0px 2px 7px rgba(0,0,0,.4);
    }
`

const StyledNewsTickerLine = styled.div`
    position: relative;
    font-size: 18px;
    padding-top: 10px;
    white-space: nowrap;
    span {
        margin-left: 90px;
        @media (max-width: ${props => props.theme.screen.tablet}){
            margin-left: 84px;
        }
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        overflow: hidden;
        font-size: 14px;
        padding: 9px 0 7px;
    }
`

const NewsTicker = () => {
    const {isLoading, randomArticle} = useRandomNews();
    return (
        <StyledNewsTicker>
            <StyledNewsInner>
                <span>News</span>
                <StyledNewsTickerLine>
                    {isLoading ? <span>Loading...</span> : randomArticle ?
                        <Ticker mode="smooth">
                            {() => (
                                <p>{ randomArticle }</p>
                            )}
                        </Ticker>
                        :
                        <span>Enough news for today.</span>
                    }
                </StyledNewsTickerLine>
            </StyledNewsInner>
        </StyledNewsTicker>
    )
}

export default NewsTicker;