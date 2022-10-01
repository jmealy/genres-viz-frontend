import type { NextPage } from 'next'
import Head from 'next/head'
import SearchBox from '../components/SearchBox'
const Home: NextPage = () => {

  const onGenreSelect = (genre: String | null) => {
    console.log(genre);
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Genre Viz</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Search Genres
        </h1>
        <SearchBox onSubmit={onGenreSelect} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}

export default Home
