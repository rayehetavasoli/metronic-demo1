import React, { useState } from 'react';
import { AddCircle, SearchNormal1, UserEdit } from 'iconsax-react';
import {AddUser} from './addUser';
import './style.css';
import { User } from '@/types/main';
import { v4 as uuidv4 } from 'uuid';
import { HeaderSectionProps } from '@/types/main';



const HeaderSection: React.FC<HeaderSectionProps> = ({ onAddUser, onSearch }) => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const defaultUser: User = { id: Number(uuidv4()), firstName: '', lastName: '', email: '', date: new Date() };

  const handleAddUser = (user: User) => {
    onAddUser(user);
    setIsAddUserOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
        <div className="p-2 flex items-center gap-2">
          <UserEdit className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">کاربران</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="search-container">
            <button>
              <SearchNormal1 className="search-icon" />
            </button>
            <input
              className="search-input"
              type="search"
              placeholder="کاربر مورد نظر را جستجو کنید"
              onChange={handleSearch}
            />
          </div>

          <button onClick={() => setIsAddUserOpen(true)}>
            <AddCircle className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
      </header>

      {isAddUserOpen && (
        <AddUser
          user={defaultUser}
          onClose={() => setIsAddUserOpen(false)}
          onAdd={handleAddUser}
        />
      )}
    </>
  );
};

export default HeaderSection;
