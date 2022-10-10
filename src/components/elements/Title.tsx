import styled, {css} from 'styled-components'
  
interface Props {
    todoBlock?: boolean;
    actualBlock?: boolean;
    open?: boolean;
}

export default styled.div<Props>`
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    white-space: nowrap;
    font-weight: 500;
    ${props => props.todoBlock && css`
        padding-left: 15px;
        position: relative;
        &:before {
            content: '';
            left: 0;
            top: -9px;
            bottom: 0;
            margin: auto;
            height: 35px;
            position: absolute;
            border-radius: 4px;
            width: 4px;
            background: ${props => props.theme.colors.lightGrey};
            @media (max-width: ${props => props.theme.screen.tablet}){
                top: 0;
            }
        }
        @media (max-width: ${props => props.theme.screen.tablet}){
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            &:after {
                width: 21px;
                height: 21px;
                content: '';
                background: url('./img/arrow.svg');
            }
            ${props => props.open && css`
                &:after {
                    transform: rotate(180deg);
                }
            `}
        }
    `}
    ${props => props.actualBlock && css`
        display: flex;
        gap: 12px;
        align-items: center;
        &:before {
            content: '';
            height: 23px;
            width: 23px;
            background: url('./img/check.svg');
        }
    `}
`;