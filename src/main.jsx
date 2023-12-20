import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import firebaseConfig from './firebase.config.jsx';
import { PersistGate } from 'redux-persist/integration/react'

import {store,persistor} from './redux/Store.jsx'
import "slick-carousel/slick/slick.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider  store={store}>
<PersistGate loading={"loading"}  persistor={persistor}>
<App />
</PersistGate>
  </Provider>
   
  </React.StrictMode>,
)
