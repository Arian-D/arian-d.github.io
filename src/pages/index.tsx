function Profiles() {
  const profiles = [
    ["LinkedIn", "https://www.linkedin.com/in/arian-dehghani"],
    ["Email", "mailto:arianxdehghani@gmail.com"],
    ["GitHub", "https://github.com/arian-d"],
  ]

  const listItems = profiles
    .map((account) => <a href={account[1]} key={account[1]}>{account[0]}</a>)
    .map((atag) => <li key={atag.key}>{atag}</li>)

  return <ul>{listItems}</ul>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-xl">
        Arian Dehghani
      </h1>
      <Profiles />
    </main>
  )
}
