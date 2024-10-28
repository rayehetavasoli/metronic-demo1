import React, { useState } from 'react';
import { AddCircle, SearchNormal1, Notepad } from 'iconsax-react';
import AddBrand from './addBrand';
import './style.css';
import { Brand } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const HeaderSection: React.FC<{ onAddBrand: (brand: Brand) => void }> = ({ onAddBrand }) => {
  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false);
  const defaultBrand: Brand = { id: Number(uuidv4()), brandName: '', founded: '', country: '', industry: '' };

  const handleAddBrand = (brand: Brand) => {
    onAddBrand(brand);
    setIsAddBrandOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
        <div className="p-2 flex items-center gap-2">
        <Notepad color="currentColor" className="w-6 h-6 relative justify-center items-center flex text-black dark:text-[#AAAAAA]"/>
          <h1 className="text-2xl font-semibold">برند ها</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="search-container">
            <button>
              <SearchNormal1 className="search-icon" />
            </button>
            <input
              className="search-input"
              type="search"
              placeholder="برند مورد نظر را جستجو کنید"
            />
          </div>

          <button onClick={() => setIsAddBrandOpen(true)}>
            <AddCircle className="w-8 h-8" color="#4A4A4A" />
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
