import { Keyframes, keyframes } from 'styled-components'

export const show = (start: string, end: string): Keyframes => keyframes`
	0% {transform: translateX(${start});}
	100% {transform: translateX(${end});}
`
