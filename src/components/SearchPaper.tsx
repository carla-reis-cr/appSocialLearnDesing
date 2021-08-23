import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBarPaper = ( ) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = value => setSearchQuery(value);

  return (
    <Searchbar
    placeholder="Buscar"
    onChangeText={onChangeSearch}
    value={searchQuery}
    />
  );
};

export default SearchBarPaper;