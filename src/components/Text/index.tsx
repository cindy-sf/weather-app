import React, { FunctionComponent, ReactElement, ReactNode } from 'react'

import type {
  AllowedColors,
  AllowedCursor,
  AllowedFonts,
  AllowedFontSizes,
  AllowedOverflow,
  AllowedRole,
  AllowedSpaces,
  AllowedTags,
  AllowedTextOverflow,
  AllowedWhiteSpace,
  FontWeight,
  TextAlignPosition,
  TextDecoration,
} from '@src/types/theme'

import { StyledText } from './index.styles'

export interface Props {
  as?: AllowedTags
  color?: AllowedColors
  colorHover?: AllowedColors
  size?: AllowedFontSizes
  children: ReactNode | string[] | string
  textDecoration?: TextDecoration
  textAlign?: TextAlignPosition
  marginTop?: keyof AllowedSpaces
  marginLeft?: keyof AllowedSpaces
  marginBottom?: keyof AllowedSpaces
  marginRight?: keyof AllowedSpaces
  maxWidth?: string
  onClick?: () => void
  cursor?: AllowedCursor
  role?: AllowedRole
  title?: string
  fontWeight?: FontWeight
  fontFamily?: AllowedFonts
  whiteSpace?: AllowedWhiteSpace
  overflow?: AllowedOverflow
  textOverflow?: AllowedTextOverflow
}

const Text: FunctionComponent<Props> = (props): ReactElement => (
  <StyledText {...props}>{props.children}</StyledText>
)

Text.defaultProps = {
  as: 'p',
  cursor: 'auto',
  color: 'white',
  size: 'medium',
  textDecoration: 'none',
  textAlign: 'left',
}

export default Text
