import { Keyframes, keyframes } from 'styled-components'

export const show = (direction: string): Keyframes => keyframes`
    0% {
		opacity: 0;
		transform: translateX(${direction});
    }
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`

export const hide = (direction: string): Keyframes => keyframes`
    0% {
		opacity: 1;
		transform: translateX(0);
	}

	100% {
		opacity: 0;
		transform: translateX(${direction});
	}
`
