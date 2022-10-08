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
  XS_BOLD = 'XS_BOLD',
  SM_BOLD = 'SM_BOLD',
  BASE_BOLD = 'BASE_BOLD',
  LG_BOLD = 'LG_BOLD',
  XL_BOLD = 'XL_BOLD',
  XL_2_BOLD = 'XL_2_BOLD',
  XL_3_BOLD = 'XL_3_BOLD',
  XL_4_BOLD = 'XL_4_BOLD',
  XL_5_BOLD = 'XL_5_BOLD',
  XL_6_BOLD = 'XL_6_BOLD',
  XL_7_BOLD = 'XL_7_BOLD',
  XL_8_BOLD = 'XL_8_BOLD',
  XL_9_BOLD = 'XL_9_BOLD',
}

export const getTypography = (t?: Typography): FlattenSimpleInterpolation => {
  return typographies[t ?? Typography.BASE]
}

export const typographies: Record<Typography, FlattenSimpleInterpolation> = {
  // XS
  [Typography.XS]: css`
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  `,
  [Typography.XS_BOLD]: css`
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    font-weight: 900;
  `,
  // SM
  [Typography.SM]: css`
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  `,
  [Typography.SM_BOLD]: css`
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    font-weight: 900;
  `,
  // BASE
  [Typography.BASE]: css`
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  `,
  [Typography.BASE_BOLD]: css`
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
    font-weight: 900;
  `,
  // LG
  [Typography.LG]: css`
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
  `,
  [Typography.LG_BOLD]: css`
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
    font-weight: 900;
  `,
  // XL
  [Typography.XL]: css`
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  `,
  [Typography.XL_BOLD]: css`
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    font-weight: 900;
  `,
  // XL_2
  [Typography.XL_2]: css`
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  `,
  [Typography.XL_2_BOLD]: css`
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: 900;
  `,
  // XL_3
  [Typography.XL_3]: css`
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
  `,
  [Typography.XL_3_BOLD]: css`
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    font-weight: 900;
  `,
  // XL_4
  [Typography.XL_4]: css`
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
  `,
  [Typography.XL_4_BOLD]: css`
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
    font-weight: 900;
  `,
  // XL_5
  [Typography.XL_5]: css`
    font-size: 3rem; /* 48px */
    line-height: 1;
  `,
  [Typography.XL_5_BOLD]: css`
    font-size: 3rem; /* 48px */
    line-height: 1;
    font-weight: 900;
  `,
  // XL_6
  [Typography.XL_6]: css`
    font-size: 3.75rem; /* 60px */
    line-height: 1;
  `,
  [Typography.XL_6_BOLD]: css`
    font-size: 3.75rem; /* 60px */
    line-height: 1;
    font-weight: 900;
  `,
  // XL_7
  [Typography.XL_7]: css`
    font-size: 4.5rem; /* 72px */
    line-height: 1;
  `,
  [Typography.XL_7_BOLD]: css`
    font-size: 4.5rem; /* 72px */
    line-height: 1;
    font-weight: 900;
  `,
  // XL_8
  [Typography.XL_8]: css`
    font-size: 6rem; /* 96px */
    line-height: 1;
  `,
  [Typography.XL_8_BOLD]: css`
    font-size: 6rem; /* 96px */
    line-height: 1;
    font-weight: 900;
  `,
  // XL_9
  [Typography.XL_9]: css`
    font-size: 8rem; /* 128px */
    line-height: 1;
  `,
  [Typography.XL_9_BOLD]: css`
    font-size: 8rem; /* 128px */
    line-height: 1;
    font-weight: 900;
  `,
}
