import React, { useContext, useCallback } from 'react';

// Material
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Contexts
import { TopicContext } from 'contexts/TopicContextProvider';

const TopicHeader = () => {
  const { searchText, setSearchText } = useContext(TopicContext);

  const onChange = useCallback(
    (e) => setSearchText(e.target.value),
    [setSearchText]
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1 sx={{ textAlign: 'center' }}>Github Topics</h1>
      
      <TextField
        id="filled-search"
        placeholder="Search topic ..."
        type="search"
        variant="filled"
        value={searchText}
        onChange={onChange}
      />
    </Box>
  );
}

export default TopicHeader;