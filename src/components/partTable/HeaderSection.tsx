import React, { useState } from 'react';
import { Add, Notepad, SearchNormal1 } from 'iconsax-react';
import {AddPart} from './addPart';
import { Part } from '@/types/main';
import { v4 as uuidv4 } from 'uuid';
import { HeaderSectionPropsPart } from '@/types/main';
import "./style/searchBar.css"



const HeaderSection: React.FC<HeaderSectionPropsPart> = ({ onAddPart, onSearch }) => {
  const [isAddPartOpen, setIsAddPartOpen] = useState(false);
  const defaultPart: Part = { id: Number(uuidv4()), partType: '', partBrand: ''};

  const handleAddPart = (part: Part) => {
    onAddPart(part);
    setIsAddPartOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
        <div className="p-2 flex items-center gap-2">
          <Notepad className="w-6 h-6 dark:text-gray-100" />
          <h1 className="text-2xl font-semibold dark:text-gray-100">قطعات</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="search-container dark:bg-dark-bg-secondary">
            <button>
              <SearchNormal1 className="search-icon" />
            </button>
            <input
              className="search-input"
              type="search"
              placeholder="قطعه یا برند مورد نظر را جستجو کنید"
              onChange={handleSearch}
            />
          </div>

          <button onClick={() => setIsAddPartOpen(true)}>
            <Add className="w-8 h-8 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
          </button>
        </div>
      </header>

      {isAddPartOpen && (
        <AddPart
        part={defaultPart}
          onClose={() => setIsAddPartOpen(false)}
          onAdd={handleAddPart}
        />
      )}
    </>
  );
};

export default HeaderSection;
