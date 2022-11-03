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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Genre Popularity Graph</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 sm:px-20 text-center">
        <h1 className="text-xl sm:text-4xl font-bold py-4">
          Genre Popularities Over time
        </h1>
        <div className="" >
          <SearchBox onSubmit={onGenreSelect} />
        </div>
        <div className="flex flex-1 w-full pr-8 py-16 sm:py-8 ">
          <Graph genre={genreGraphData} />
        </div>
      </main>
    </div>
  )
}

export default Home
