import { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import genresList from '../data/genres';

interface SearchBoxProps {
  onSubmit: (genre: String | null) => void
}


const SearchBox: NextPage<SearchBoxProps> = (props) => {
  const { onSubmit } = props;

  return (
    <Autocomplete
      onChange={(event: any, newValue: string | null) => {
        onSubmit(newValue);
      }}
      disablePortal
      options={genresList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Genre" />}
    />
  )
}

export default SearchBox
