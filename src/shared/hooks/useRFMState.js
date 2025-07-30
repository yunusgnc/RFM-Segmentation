import { useState, useCallback } from 'react';

export const useRFMState = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [filters, setFilters] = useState({
    recency: { min: 1, max: 5 },
    frequency: { min: 1, max: 5 },
    monetary: { min: 1, max: 5 }
  });
  const [activeTab, setActiveTab] = useState('grid');
  const [activeFilter, setActiveFilter] = useState(null);

  const handleCustomerClick = useCallback((customerId) => {
    setSelectedIds(prev => 
      prev.includes(customerId) 
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  }, []);

  const handleFilterChange = useCallback((type, field, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  }, []);

  const handleQuickFilter = useCallback((type, preset) => {
    setFilters(prev => ({
      ...prev,
      [type]: preset
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      recency: { min: 1, max: 5 },
      frequency: { min: 1, max: 5 },
      monetary: { min: 1, max: 5 }
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  return {
    customers,
    setCustomers,
    selectedIds,
    setSelectedIds,
    filters,
    setFilters,
    activeTab,
    setActiveTab,
    activeFilter,
    setActiveFilter,
    handleCustomerClick,
    handleFilterChange,
    handleQuickFilter,
    resetFilters,
    clearSelection
  };
}; 