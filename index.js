import path from 'path'

const resources = [
  '_size.scss',
]

export default resources.map(file => path.resolve(__dirname, file))