import { debounce } from 'lodash'
import App from './src/App'
import './src/styles/index.css'

const root = document.getElementById('app')

root.appendChild(App())
