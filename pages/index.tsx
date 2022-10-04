import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import SearchBox from 'components/SearchBox';
import Graph from 'components/Graph';

const Home: NextPage = () => {
  const [genreGraphData, setGenreGraphData] = useState(null);

  const onGenreSelect = async (genre: String | null) => {
    const data = await fetch(`/api/genresInfo/${genre}`)
      .then((res) => res.json());
    setGenreGraphData(data);
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
        <Graph genre={genreGraphData} />
      </main>
    </div>
  )
}

export default Home
