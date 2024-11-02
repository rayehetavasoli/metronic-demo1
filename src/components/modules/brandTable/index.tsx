'use client';
import React, { FC, useState, useMemo } from 'react';
import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './brandTable';
import EditBrand from './editBrand';
import DeleteBrand from './deleteBrand';
import { Brand, BrandTableProps } from '@/types';

const BrandTable: FC<BrandTableProps> = ({ data }) => {
  const [brands, setBrands] = useState<Brand[]>(data);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>(data); 
  const [selectedBrand, setSelectedBrand] = useState<Brand| null>(null);
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = useMemo(() => Math.ceil(filteredBrands.length / pageSize), [filteredBrands.length, pageSize]);

  const currentBrands = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredBrands.slice(startIndex, startIndex + pageSize);
  }, [filteredBrands, currentPage, pageSize]);

  const updateBrandsState = (updatedBrands: Brand[]) => {
    setBrands(updatedBrands);
    setFilteredBrands(updatedBrands);
  };

  const handleAddBrand = (newBrand: Brand) => updateBrandsState([...brands, newBrand]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = brands.filter(({ brandName, founded, country, industry }) =>
      `${brandName} ${founded} ${country} ${industry}`.toLowerCase().includes(lowerQuery)
    );
    setFilteredBrands(filtered);
  };

  const handleEditBrand = (brand: Brand) => {
    setSelectedBrand(brand);
    setModalType('edit');
  };

  const handleDeleteBrand = (brand: Brand) => {
    setSelectedBrand(brand);
    setModalType('delete');
  };

  const confirmDelete = () => {
    if (selectedBrand) {
      updateBrandsState(brands.filter(brand => brand.id !== selectedBrand.id));
      closeModal();
    }
  };

  const updateBrand = (updatedBrand: Brand) => {
    const updatedBrands = brands.map(brand => (brand.id === updatedBrand.id ? updatedBrand : brand));
    updateBrandsState(updatedBrands);
    closeModal();
  };

  const closeModal = () => {
    setSelectedBrand(null);
    setModalType(null);
  };

  return (
    <div className="px-10 py-8 bg-gray-50 rounded-3xl shadow-lg w-full mx-20">
      <HeaderSection onAddBrand={handleAddBrand} onSearch={handleSearch} />

      <Table data={currentBrands} onEdit={handleEditBrand} onDelete={handleDeleteBrand} />

      {modalType === 'edit' && selectedBrand && (
        <EditBrand brand={selectedBrand} onClose={closeModal} onUpdate={updateBrand} />
      )}

      {modalType === 'delete' && selectedBrand && (
        <DeleteBrand brand={selectedBrand} onCancel={closeModal} onDelete={confirmDelete} />
      )}
      
      <Footer
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1); 
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export { BrandTable };
