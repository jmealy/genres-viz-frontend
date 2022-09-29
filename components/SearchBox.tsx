import type { NextPage } from 'next';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import genresList from '../data/genres';


const SearchBox: NextPage = () => {
  return (
    <Autocomplete
      disablePortal
      options={genresList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Genre" />}
    />

  )
}

export default SearchBox

