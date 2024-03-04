export type SVGImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: any
}

/**
 * Inline SVG image contents in React to allow for SVG
 * animation, styling, and interactivity.
 *
 * Uses @svgr/webpack to override SVG import as a React component.
 */
export const SVGImage = ({ ...props }: SVGImageProps) => {
  const { src: Icon, ...restProps } = props
  return <Icon {...restProps} />
}
