'use client';
import React, { FC, useState, useMemo } from 'react';
import HeaderSection from './HeaderSection';
import Footer from './Footer';
import { Table } from './InspectionCostTable';
import {EditInspectionCost} from './EditInspectionCost';
import DeleteInspectionCost from './DeleteInspectionCost';
import { InspectionCost, InspectionCostTableProps } from '@/types/main';

const InspectionCostTable: FC<InspectionCostTableProps> = ({ data }) => {
  const [inspectionCosts, setInspectionCosts] = useState<InspectionCost[]>(data);
  const [filteredInspectionCosts, setFilteredInspectionCosts] = useState<InspectionCost[]>(data); 
  const [selectedInspectionCost, setSelectedInspectionCost] = useState<InspectionCost| null>(null);
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = useMemo(() => Math.ceil(filteredInspectionCosts.length / pageSize), [filteredInspectionCosts.length, pageSize]);

  const currentInspectionCosts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredInspectionCosts.slice(startIndex, startIndex + pageSize);
  }, [filteredInspectionCosts, currentPage, pageSize]);

  const updateInspectionCostsState = (updatedInspectionCosts: InspectionCost[]) => {
    setInspectionCosts(updatedInspectionCosts);
    setFilteredInspectionCosts(updatedInspectionCosts);
  };

  const handleAddInspectionCost = (newInspectionCost: InspectionCost) => updateInspectionCostsState([...inspectionCosts, newInspectionCost]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = inspectionCosts.filter(({ inspectionType , cost }) =>
      `${inspectionType} ${cost}`.toLowerCase().includes(lowerQuery)
    );
    setFilteredInspectionCosts(filtered);
  };

  const handleEditInspectionCost = (inspectionCost: InspectionCost) => {
    setSelectedInspectionCost(inspectionCost);
    setModalType('edit');
  };

  const handleDeleteInspectionCost = (inspectionCost: InspectionCost) => {
    setSelectedInspectionCost(inspectionCost);
    setModalType('delete');
  };

  const confirmDelete = () => {
    if (selectedInspectionCost) {
      updateInspectionCostsState(inspectionCosts.filter(inspectionCost => inspectionCost.id !== selectedInspectionCost.id));
      closeModal();
    }
  };

  const updateInspectionCost = (updatedInspectionCost: InspectionCost) => {
    const updatedInspectionCosts = inspectionCosts.map(inspectionCost => (inspectionCost.id === updatedInspectionCost.id ? updatedInspectionCost : inspectionCost));
    updateInspectionCostsState(updatedInspectionCosts);
    closeModal();
  };

  const closeModal = () => {
    setSelectedInspectionCost(null);
    setModalType(null);
  };

  return (
    <div className="px-10 py-8 bg-gray-50 dark:bg-dark-bg-table rounded-3xl shadow-lg mx-18">
      <HeaderSection onAddInspectionCost={handleAddInspectionCost} onSearch={handleSearch} />

      <Table data={currentInspectionCosts} onEdit={handleEditInspectionCost} onDelete={handleDeleteInspectionCost} />

      {modalType === 'edit' && selectedInspectionCost && (
        <EditInspectionCost inspectionCost={selectedInspectionCost} onClose={closeModal} onUpdate={updateInspectionCost} />
      )}

      {modalType === 'delete' && selectedInspectionCost && (
        <DeleteInspectionCost inspectionCost={selectedInspectionCost} onCancel={closeModal} onDelete={confirmDelete} />
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

export { InspectionCostTable };
