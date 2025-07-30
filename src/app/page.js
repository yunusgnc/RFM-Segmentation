'use client';

import { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import customersData from '../data/customers.json';
import { rfmService } from '../features/rfm';
import { useRFMState, useSubmitSelectedIds } from '../shared/hooks';
import { Header, MainContent, Sidebar } from '../shared/layout';
import ErrorBoundary from '../shared/ErrorBoundary';
import { FaUsers, FaFilter, FaCheckCircle } from 'react-icons/fa';
import { MdSegment } from 'react-icons/md';

export default function Home() {
  const {
    customers,
    setCustomers,
    selectedIds,
    filters,
    activeTab,
    setActiveTab,
    activeFilter,
    setActiveFilter,
    handleCustomerClick,
    handleFilterChange,
    handleQuickFilter,
    resetFilters,
    clearSelection
  } = useRFMState();

  const submitMutation = useSubmitSelectedIds();

  useEffect(() => {
    const customersWithScores = rfmService.calculateScores(customersData);
    setCustomers(customersWithScores);
  }, [setCustomers]);

  const filteredCustomers = useMemo(() => {
    return rfmService.filterCustomers(customers, filters);
  }, [customers, filters]);

  const gridData = useMemo(() => {
    return rfmService.getGridData(filteredCustomers);
  }, [filteredCustomers]);

  const handleSubmit = async () => {
    if (selectedIds.length === 0) {
      toast.warning('Please select at least one customer');
      return;
    }

    submitMutation.mutate(selectedIds, {
      onSuccess: (data) => {
        if (data.success) {
          toast.success(`Successfully sent ${selectedIds.length} selected IDs!`);
          clearSelection();
        } else {
          toast.error(data.error || 'Error sending selected IDs');
        }
      },
      onError: (error) => {
        toast.error(error.message || 'Network error. Please try again.');
      }
    });
  };

  const statsData = useMemo(() => {
    const baseStats = rfmService.getStatsData(customers, filteredCustomers, selectedIds);
    return baseStats.map(stat => ({
      ...stat,
      icon: stat.icon === 'users' ? <FaUsers className="w-5 h-5" /> :
            stat.icon === 'filter' ? <FaFilter className="w-5 h-5" /> :
            stat.icon === 'check-circle' ? <FaCheckCircle className="w-5 h-5" /> :
            <MdSegment className="w-5 h-5" />
    }));
  }, [customers.length, filteredCustomers.length, selectedIds.length]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header 
          title="RFM Segmentation"
          subtitle="Advanced customer segmentation using Recency, Frequency, and Monetary analysis"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 mt-10">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <Sidebar
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              onQuickFilter={handleQuickFilter}
              onResetFilters={resetFilters}
              onActiveFilterChange={setActiveFilter}
              onSubmit={handleSubmit}
              isLoading={submitMutation.isPending}
              selectedCount={selectedIds.length}
            />
            
            <MainContent
              statsData={statsData}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              gridData={gridData}
              filteredCustomers={filteredCustomers}
              selectedIds={selectedIds}
              onCustomerClick={handleCustomerClick}
              getSegmentColor={rfmService.getSegmentColor}
              getSegmentName={rfmService.getSegmentName}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
