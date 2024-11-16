import React, { useState } from 'react';
import { Add, Notepad, SearchNormal1 } from 'iconsax-react';
import {AddBrand} from './addBrand';
import { Brand } from '@/types/main';
import { v4 as uuidv4 } from 'uuid';
import { HeaderSectionPropsB } from '@/types/main';
import "./style/searchBar.css"



const HeaderSection: React.FC<HeaderSectionPropsB> = ({ onAddBrand, onSearch }) => {
  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false);
  const defaultBrand: Brand = { id: Number(uuidv4()), brandName: '', founded: '', country: '', industry: ''};

  const handleAddBrand = (brand: Brand) => {
    onAddBrand(brand);
    setIsAddBrandOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
        <div className="p-2 flex items-center gap-2">
          <Notepad className="w-6 h-6" />
          <h1 className="text-2xl font-semibold dark:text-dark-text-primary">برند</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="search-container dark:bg-dark-bg-secondary">
            <button>
              <SearchNormal1 className="search-icon" />
            </button>
            <input
              className="search-input"
              type="search"
              placeholder="برند مورد نظر را جستجو کنید"
              onChange={handleSearch}
            />
          </div>

          <button onClick={() => setIsAddBrandOpen(true)}>
            <Add className="w-8 h-8 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
          </button>
        </div>
      </header>

      {isAddBrandOpen && (
        <AddBrand
        brand={defaultBrand}
          onClose={() => setIsAddBrandOpen(false)}
          onAdd={handleAddBrand}
        />
      )}
    </>
  );
};

export default HeaderSection;
