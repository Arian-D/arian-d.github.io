import Link from 'next/link'
import Head from 'next/head'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdForum } from "react-icons/md"

const myName = "Arian Dehghani"

const title = <title>{myName}</title>

type Profile = {
  name: string;
  url: string;
  icon: JSX.Element;
}

const profiles: Profile[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arian-dehghani",
    icon: <FaLinkedin />
  },
  {
    name: "GitHub",
    url: "https://github.com/arian-d",
    icon: <FaGithub />
  },
  {
    name: "Email",
    url: "mailto:arianxdehghani@gmail.com",
    icon: <MdEmail />
  },
  {
    name: "Blog",
    url: "https://arian-d.github.io/blog",
    icon: <MdForum />
  }
]

function Profiles() {
  const listItems = profiles
    .map((account) =>
      <Link href={account.url} key={account.name}> {account.icon}{account.name}
      </Link>)
    .map((atag) =>
      <li className="my-2 p-2 text-2xl hover:animate-pulse border rounded-md" key={atag.key}>{atag}</li>)

  return <ul>{listItems}</ul>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>{title}</Head>
      <h1 className="font-bold text-5xl">
        {myName}
      </h1>
      <Profiles />
    </main>
  )
}
