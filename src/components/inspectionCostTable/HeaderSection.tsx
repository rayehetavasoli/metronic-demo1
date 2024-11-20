import React, { useState } from 'react';
import { Add, Notepad, SearchNormal1 } from 'iconsax-react';
import {AddInspectionCost} from './AddInspectionCost';
import { InspectionCost } from '@/types/main';
import { v4 as uuidv4 } from 'uuid';
import { HeaderSectionPropsInspectionCost } from '@/types/main';
import "./style/searchBar.css"
import SearchBar from './SearchBar';



const HeaderSection: React.FC<HeaderSectionPropsInspectionCost> = ({ onAddInspectionCost, onSearch }) => {
  const [isAddInspectionCostOpen, setIsAddInspectionCostOpen] = useState(false);
  const defaultInspectionCost: InspectionCost = { id: Number(uuidv4()), inspectionType: '', cost: 0};

  const handleAddInspectionCost = (inspectionCosts: InspectionCost) => {
    onAddInspectionCost(inspectionCosts);
    setIsAddInspectionCostOpen(false);
  };


  return (
    <>
      <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
        <div className="p-2 flex items-center gap-2">
          <Notepad className="w-6 h-6 dark:text-gray-100" />
          <h1 className="text-2xl font-semibold dark:text-gray-100">هزینه بازرسی استاندارد</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="search-container dark:bg-dark-bg-secondary">
            <button>
              <SearchNormal1 className="search-icon" />
            </button>
            <SearchBar onSearch={onSearch}/>
          </div>

          <button onClick={() => setIsAddInspectionCostOpen(true)}>
            <Add className="w-8 h-8 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" />
          </button>
        </div>
      </header>

      {isAddInspectionCostOpen && (
        <AddInspectionCost
        inspectionCost={defaultInspectionCost}
          onClose={() => setIsAddInspectionCostOpen(false)}
          onAdd={handleAddInspectionCost}
        />
      )}
    </>
  );
};

export default HeaderSection;
