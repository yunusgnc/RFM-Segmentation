export const rfmService = {
  calculateScores: (customers) => {
    return customers.map(customer => {
      const recencyScore = Math.ceil((customer.recency / 365) * 5);
      const frequencyScore = Math.ceil((customer.frequency / 50) * 5);
      const monetaryScore = Math.ceil((customer.monetary / 1000) * 5);
      
      return {
        ...customer,
        recencyScore: Math.max(1, Math.min(5, recencyScore)),
        frequencyScore: Math.max(1, Math.min(5, frequencyScore)),
        monetaryScore: Math.max(1, Math.min(5, monetaryScore)),
        x: Math.max(1, Math.min(5, frequencyScore)),
        y: Math.max(1, Math.min(5, monetaryScore))
      };
    });
  },

  filterCustomers: (customers, filters) => {
    return customers.filter(customer => {
      return customer.recencyScore >= filters.recency.min &&
             customer.recencyScore <= filters.recency.max &&
             customer.frequencyScore >= filters.frequency.min &&
             customer.frequencyScore <= filters.frequency.max &&
             customer.monetaryScore >= filters.monetary.min &&
             customer.monetaryScore <= filters.monetary.max;
    });
  },

  getGridData: (filteredCustomers) => {
    return Array.from({ length: 5 }, (_, y) =>
      Array.from({ length: 5 }, (_, x) => {
        const cellCustomers = filteredCustomers.filter(
          customer => customer.x === x + 1 && customer.y === 5 - y
        );
        return cellCustomers;
      })
    );
  },

  getSegmentColor: (f, m) => {
    const score = f + m;
    if (score >= 8) return 'from-emerald-500 to-green-600';
    if (score >= 6) return 'from-blue-500 to-indigo-600';
    if (score >= 4) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  },

  getSegmentName: (f, m) => {
    const score = f + m;
    if (score >= 8) return 'Champions';
    if (score >= 6) return 'Loyal Customers';
    if (score >= 4) return 'At Risk';
    return 'Lost';
  },

  getStatsData: (customers, filteredCustomers, selectedIds) => [
    { 
      icon: 'users', 
      label: "Total", 
      value: customers.length, 
      color: "bg-blue-500/20" 
    },
    { 
      icon: 'filter', 
      label: "Filtered", 
      value: filteredCustomers.length, 
      color: "bg-green-500/20" 
    },
    { 
      icon: 'check-circle', 
      label: "Selected", 
      value: selectedIds.length, 
      color: "bg-purple-500/20" 
    },
    { 
      icon: 'segment', 
      label: "Segments", 
      value: 25, 
      color: "bg-orange-500/20" 
    }
  ]
}; 