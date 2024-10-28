'use client';
import React, { FC, useState } from 'react';
import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './brandTable';
import EditBrand from './editBrand';
import DeleteBrand from './deleteBrand';
import { Brand, BrandTableProps } from '@/types';

const BrandTable: FC<BrandTableProps> = ({ data }) => {
  const [brands, setBrands] = useState<Brand[]>(data);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);

  const handleAddBrand = (newBrand: Brand) => {
    setBrands([...brands, newBrand]);
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
      setBrands(brands.filter((brand) => brand.id !== selectedBrand.id));
      closeModal();
    }
  };

  const updateBrand = (updatedBrand: Brand) => {
    setBrands(brands.map((brand) => (brand.id === updatedBrand.id ? updatedBrand : brand)));
    closeModal();
  };

  const closeModal = () => {
    setSelectedBrand(null);
    setModalType(null);
  };

  return (
    <div className="px-10 py-8 bg-gray-50 rounded-3xl shadow-lg w-full mx-20">
      <HeaderSection onAddBrand={handleAddBrand} />
      <Table data={brands} onEdit={handleEditBrand} onDelete={handleDeleteBrand} />

      {modalType === 'edit' && selectedBrand && (
        <EditBrand brand={selectedBrand} onClose={closeModal} onUpdate={updateBrand} />
      )}

      {modalType === 'delete' && selectedBrand && (
        <DeleteBrand brand={selectedBrand} onCancel={closeModal} onDelete={confirmDelete} />
      )}
      <Footer />
    </div>
  );
};

export { BrandTable };
