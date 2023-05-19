import Image from 'next/image'
import NavBar from './components/navbar'
import SearchBar from './components/searchbar'

export default function Home() {
  return (
    <main className="flex gap-5">
      <div className="">
        <NavBar />
        <SearchBar />
      </div>
    </main>
  )
}
