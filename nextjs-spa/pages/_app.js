import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    if (ctx.nextExport) {
      return { loadingPage: true }
    }

    return App.getInitialProps({ Component, router, ctx })
  }

  render () {
    const { Component, pageProps, loadingPage } = this.props

    if (loadingPage) {
      return <Container>
        <div>Loading...</div>
      </Container>
    }

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}