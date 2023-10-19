import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <App
    greeting={'Hello'}
    user={'Swetha'}
    projectTitle={
      'Welcome to the journey of setting up your own typescript react project from scratch'
    }
  />
)
