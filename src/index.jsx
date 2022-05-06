import { createRoot } from 'react-dom/client'
import App from './App'
import './global.scss'

const root = createRoot(document.querySelector('#root'))

root.render(<App />)
