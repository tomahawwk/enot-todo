import {keyframes} from 'styled-components'


export const FadeYUp = keyframes`
	0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

export const Rotate = keyframes`
	0% {
        transform: rotate(90deg);
        opacity: 0;
    }
    100% {
        transform: rotate(0deg);
        opacity: 1;
    }
`

export const MoveYUp = keyframes`
	0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0px);
    }
`