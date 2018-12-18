import Typography from 'typography'
import elkGlen from 'typography-theme-elk-glen'

const typography = new Typography({
  ...elkGlen,
  baseFontSize: '16px',
  scaleRatio: 1.5
})

export const rhythm = typography.rhythm

export default typography
