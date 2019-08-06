declare interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.png'

declare module 'mock'

declare module '*.svg' {
  const content: SvgrComponent
  export default content
}
