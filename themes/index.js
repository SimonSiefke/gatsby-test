import blue from './blue'
import red from './red'
import defaultOptions from './defaultOptions'
import merge from 'deepmerge'

const themes = {
  default: merge(defaultOptions, red)
}
export default themes
