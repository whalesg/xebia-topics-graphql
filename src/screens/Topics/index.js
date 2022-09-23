import React, { useContext, useCallback } from 'react';

// MUIs
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Contexts
import { TopicContext } from 'contexts/TopicContextProvider';

// Components
import TopicHeader from './TopicHeader';
import TopicTable from './TopicTable';

const Topics = () => {
  const {
    loading,
    error,
    topics,
    relatedTopics,
    selectedTopic,
    setSelectedTopic
  } = useContext(TopicContext);

  const onTopicClick = useCallback(
    (topic) => setSelectedTopic(topic),
    [setSelectedTopic]
  );

  return (
    <Box sx={{ width: 600, p: 5, mx: 'auto' }}>
      <TopicHeader />

      {topics.length ? (
        <TopicTable
          data={topics}
          selected={selectedTopic}
          onClick={onTopicClick}
        />
      ) : null}

      {relatedTopics.length ? (
        <>
          <h3>Releated Topics</h3>
          <TopicTable data={relatedTopics} />
        </>
      ) : null}

      {loading ? (
        <Typography>Loading ...</Typography>
      ) : null}

      {error ? (
        <Typography>Sorry, something went wrong!</Typography>
      ) : null}

      {!loading && !topics.length ? (
        <Typography>There is no topics.</Typography>
      ) : null}
    </Box>
  );
}

export default Topics;
