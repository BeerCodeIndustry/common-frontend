import { css, FlattenSimpleInterpolation } from 'styled-components'

import { getMediaQuery, ScreenSize } from './layout'

export enum Typography {
  NAVIGATION = 'NAVIGATION',
  HEADING_1 = 'HEADING_1',
  HEADING_2 = 'HEADING_2',
  HEADING_3 = 'HEADING_3',
  SUB_HEADING_1 = 'SUB_HEADING_1',
  BODY_REGULAR = 'BODY_REGULAR',
  BODY_SMALL = 'BODY_SMALL',
  BODY_MIN = 'BODY_MIN',
}

export const getTypography = (t?: Typography): FlattenSimpleInterpolation => {
  return typographies[t ?? Typography.BODY_REGULAR]
}

export const typographies: { [key in Typography]: FlattenSimpleInterpolation } =
  {
    [Typography.HEADING_1]: css`
      font-weight: 400;
      font-size: 26px;
      text-decoration: none;
      letter-spacing: -0.04em;
      line-height: 1.1;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 60px;
      }

      ${getMediaQuery(ScreenSize.XLARGE)} {
        font-size: 90px;
      }
    `,
    [Typography.SUB_HEADING_1]: css`
      font-weight: 400;
      font-size: 24px;
      text-decoration: none;
      letter-spacing: -0.02em;
      line-height: 1.2;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 28px;
      }
    `,
    [Typography.HEADING_2]: css`
      font-weight: 400;
      font-size: 23px;
      text-decoration: none;
      letter-spacing: -0.04em;
      line-height: 1.1;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 40px;
      }

      ${getMediaQuery(ScreenSize.XLARGE)} {
        font-size: 70px;
      }
    `,
    [Typography.HEADING_3]: css`
      font-weight: 400;
      font-size: 20px;
      text-decoration: none;
      letter-spacing: -0.04em;
      line-height: 1.1;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 30px;
      }

      ${getMediaQuery(ScreenSize.XLARGE)} {
        font-size: 40px;
      }
    `,
    [Typography.BODY_REGULAR]: css`
      font-weight: 400;
      font-size: 18px;
      line-height: 1.3;
      letter-spacing: 0;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 22px;
      }

      ${getMediaQuery(ScreenSize.XLARGE)} {
        font-size: 25px;
      }
    `,
    [Typography.BODY_SMALL]: css`
      font-weight: 400;
      font-size: 14px;
      line-height: 1.3;
      letter-spacing: 0;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 16px;
      }

      ${getMediaQuery(ScreenSize.XLARGE)} {
        font-size: 18px;
      }
    `,
    [Typography.NAVIGATION]: css`
      font-size: 14px;
      line-height: 1.3;
      text-decoration: none;

      ${getMediaQuery(ScreenSize.LARGE)} {
        font-size: 16px;
      }
    `,
    [Typography.BODY_MIN]: css`
      font-weight: 400;
      font-size: 12px;
    `,
  }
