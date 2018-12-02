import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps({ nextExport }) {
    const res = await fetch('https://api.github.com/users/lucleray/repos')
    const repos = await res.json()
    return { repos }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.repos.map(repo => (
            <li>
              <Link href={{ pathname: '/repo', query: { repo: repo.name } }}>
                <a>{repo.full_name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
