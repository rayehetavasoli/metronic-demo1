import { FC, useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchText);
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, onSearch]);

  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="برند مورد نظر را جستجو کنید"
      className="mb-4 p-2 border border-gray-300 rounded-md w-full text-right"
    />
  );
};

export default SearchBar;
