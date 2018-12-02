import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps({query}) {
    const res = await fetch(
      `https://api.github.com/repos/lucleray/${query.repo}`
    )
    const repo = await res.json()
    console.log(repo)
    return { repo }
  }

  render() {
    return (
      <div>
        <h1>{this.props.repo.full_name}</h1>
        <div>{this.props.repo.stargazers_count}</div>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    )
  }
}
