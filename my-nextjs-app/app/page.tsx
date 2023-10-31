import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="http://localhost:3000/api/getlist">Get collection</a>
      <a href="http://localhost:3000/api/reguser">Post "data"</a>
    </main>
  )
}
