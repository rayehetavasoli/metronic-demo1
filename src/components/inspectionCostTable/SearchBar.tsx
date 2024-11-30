import { FC, useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchText);
    }, 3000); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, onSearch]);

  return (
    <input
      type="search"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="هزینه مورد نظر را جستجو کنید"
      className="search-input"
    />
  );
};

export default SearchBar;
