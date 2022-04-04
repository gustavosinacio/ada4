import { createRoot } from 'react-dom/client'

import { App } from './App'
import './styles/global.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Get elemenent by id root has returned null')
}
const root = createRoot(container)
root.render(<App />)
