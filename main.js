import { debounce } from 'lodash'
import 'swiper/css/bundle'
import App from './src/App'
import './src/styles/index.css'
import './src/styles/style.css'
import WindowLoad from './src/Container/Function'
const root = document.getElementById('app')

root.appendChild(App())
WindowLoad()

