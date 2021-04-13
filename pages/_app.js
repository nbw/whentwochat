import '@styles/globals.scss'
import 'antd/dist/antd.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import makeStore from '../store'

export default({ Component, pageProps }) => {
  const store = makeStore(pageProps.initialReduxState);

  useEffect(function mount() {
    store.dispatch({ type: 'URL/INIT', window: window});
  });

  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}
