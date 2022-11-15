import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const links = [
  {
    text: "GitHub",
    url: "https://github.com/arian-d"
  },
  {
    text: "Blog",
    url: "https://arian-d.github.io/blog"
  },
  {
    text: "Email",
    url: "mailto:arianxdehghani@gmail.com"
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      Hi, I'm Arian.
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Arian's Website</title>
