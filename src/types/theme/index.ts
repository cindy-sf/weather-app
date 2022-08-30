export type AllowedColors =
  | 'black'
  | 'grey'
  | 'purple'
  | 'purpleLight'
  | 'white'
export type AllowedCursor = 'pointer' | 'auto'
export type AllowedFonts = 'Recoleta' | 'sans-serif' | 'Katwijkmono'
export type AllowedFontSizes =
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
export type AllowedOverflow = 'hidden' | 'scroll'
export type AllowedRadius = 'small' | 'medium' | 'large'
export type AllowedRole = 'button' | 'link'
export type AllowedSpaces = AllowedFontSizes & 'none'
export type AllowedTextOverflow = 'ellipsis'
export type AllowedTags = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'a' | 'span'
export type AllowedWhiteSpace = 'nowrap'
export type AllowedBreakPoints = 'smallScreen' | 'tinyScreen' | 'mediumScreen'

export type FontWeight = 'bold' | 'normal'
export type TextAlignPosition = 'center' | 'left' | 'right'
export type TextDecoration = 'none' | 'underline'

export interface ThemeAttributes {
  breakpoints: Record<AllowedBreakPoints, string>
  colors: Record<AllowedColors, string>
  fonts: AllowedFonts[]
  fontSizes: Record<AllowedFontSizes, string>
  radius: Record<AllowedRadius, string>
  space: Record<AllowedSpaces, string>
}
