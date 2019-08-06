import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from 'store/sagaStore/configureStore'
import { Store } from 'redux'
import setRem from 'utils/setRem'

import 'antd-mobile/dist/antd-mobile.css'

class MyApp extends App<{ store: Store }> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps, globalData: {} }
  }
  componentDidMount() {
    setRem()
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp))
