import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './about'
import './index.css'
import { hideLoading,startHelloScreen,hideHelloScreen,unhideMainPage,animateDesignation } from './helpers'

ReactDOM.createRoot(document.getElementById('about-page')).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)

window.onload = () => {
  // setTimeout(hideLoading,250);
  setTimeout(startHelloScreen, 500);
  setTimeout(hideHelloScreen, 3520);
  setTimeout(unhideMainPage, 3540);
  setTimeout(animateDesignation, 6040);
}


                