import {
  createContext,
  useEffect,
  useState,
  useMemo
} from 'react';

import { useQuery } from '@apollo/client';

// Queries
import { GET_TOPICS } from 'constants/queries';

// Topic context data shape
const TopicContext = createContext({
  loading: false,
  error: null,
  topics: [],
  relatedTopics: [],
  searchText: '',
  setSearchText: () => {},
  selectedTopic: null,
  setSelectedTopic: () => {}
});

const TopicContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('react');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const { loading, error, data } = useQuery(GET_TOPICS, {
    variables: { name: searchText }
  });

  const topics = useMemo(() => {
    return data?.topics?.relatedTopics || [];
  }, [data]);

  const relatedTopics = useMemo(() => {
    return selectedTopic?.relatedTopics || [];
  }, [selectedTopic]);

  useEffect(() => {
    setSelectedTopic(null);
  }, [searchText]);

  const contextData = {
    loading,
    error,
    topics,
    relatedTopics,
    searchText,
    setSearchText,
    selectedTopic,
    setSelectedTopic
  };

  return (
    <TopicContext.Provider value={contextData}>
      {children}
    </TopicContext.Provider>
  );
}

export {
  TopicContext,
  TopicContextProvider
};