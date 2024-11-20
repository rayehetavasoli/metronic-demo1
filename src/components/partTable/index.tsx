'use client';
import React, { FC, useState, useMemo } from 'react';
import HeaderSection from './HeaderSection';
import Footer from './Footer';
import { Table } from './PartTable';
import {EditPart} from './EditPart';
import DeletePart from './DeletePart';
import { Part, PartTableProps } from '@/types/main';

const PartTable: FC<PartTableProps> = ({ data }) => {
  const [parts, setParts] = useState<Part[]>(data);
  const [filteredParts, setFilteredParts] = useState<Part[]>(data); 
  const [selectedPart, setSelectedPart] = useState<Part| null>(null);
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = useMemo(() => Math.ceil(filteredParts.length / pageSize), [filteredParts.length, pageSize]);

  const currentParts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredParts.slice(startIndex, startIndex + pageSize);
  }, [filteredParts, currentPage, pageSize]);

  const updatePartsState = (updatedParts: Part[]) => {
    setParts(updatedParts);
    setFilteredParts(updatedParts);
  };

  const handleAddPart = (newPart: Part) => updatePartsState([...parts, newPart]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = parts.filter(({ partType , partBrand }) =>
      `${partType} ${partBrand}`.toLowerCase().includes(lowerQuery)
    );
    setFilteredParts(filtered);
  };

  const handleEditPart = (part: Part) => {
    setSelectedPart(part);
    setModalType('edit');
  };

  const handleDeletePart = (part: Part) => {
    setSelectedPart(part);
    setModalType('delete');
  };

  const confirmDelete = () => {
    if (selectedPart) {
      updatePartsState(parts.filter(part => part.id !== selectedPart.id));
      closeModal();
    }
  };

  const updatePart = (updatedPart: Part) => {
    const updatedParts = parts.map(part => (part.id === updatedPart.id ? updatedPart : part));
    updatePartsState(updatedParts);
    closeModal();
  };

  const closeModal = () => {
    setSelectedPart(null);
    setModalType(null);
  };

  return (
    <div className="px-10 py-8 bg-gray-50 dark:bg-dark-bg-table rounded-3xl shadow-lg mx-18">
      <HeaderSection onAddPart={handleAddPart} onSearch={handleSearch} />

      <Table data={currentParts} onEdit={handleEditPart} onDelete={handleDeletePart} />

      {modalType === 'edit' && selectedPart && (
        <EditPart part={selectedPart} onClose={closeModal} onUpdate={updatePart} />
      )}

      {modalType === 'delete' && selectedPart && (
        <DeletePart part={selectedPart} onCancel={closeModal} onDelete={confirmDelete} />
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

export { PartTable };
