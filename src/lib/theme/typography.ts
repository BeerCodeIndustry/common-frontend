import { FlattenSimpleInterpolation, css } from 'styled-components'

export enum Typography {
  XS = 'XS',
  SM = 'SM',
  BASE = 'BASE',
  LG = 'LG',
  XL = 'XL',
  XL_2 = 'XL_2',
  XL_3 = 'XL_3',
  XL_4 = 'XL_4',
  XL_5 = 'XL_5',
  XL_6 = 'XL_6',
  XL_7 = 'XL_7',
  XL_8 = 'XL_8',
  XL_9 = 'XL_9',
}

export const getTypography = (t?: Typography): FlattenSimpleInterpolation => {
  return typographies[t ?? Typography.BASE]
}

export const typographies: Record<Typography, FlattenSimpleInterpolation> = {
  [Typography.XS]: css`
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  `,
  [Typography.SM]: css`
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  `,
  [Typography.BASE]: css`
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  `,
  [Typography.LG]: css`
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
  `,
  [Typography.XL]: css`
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  `,
  [Typography.XL_2]: css`
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  `,
  [Typography.XL_3]: css`
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
  `,
  [Typography.XL_4]: css`
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
  `,
  [Typography.XL_5]: css`
    font-size: 3rem; /* 48px */
    line-height: 1;
  `,
  [Typography.XL_6]: css`
    font-size: 3.75rem; /* 60px */
    line-height: 1;
  `,
  [Typography.XL_7]: css`
    font-size: 4.5rem; /* 72px */
    line-height: 1;
  `,
  [Typography.XL_8]: css`
    font-size: 6rem; /* 96px */
    line-height: 1;
  `,
  [Typography.XL_9]: css`
    font-size: 8rem; /* 128px */
    line-height: 1;
  `,
}
