export const validateSelectedIds = (ids) => {
  if (!Array.isArray(ids)) {
    return { isValid: false, error: 'Selected IDs must be an array' };
  }
  
  if (ids.length === 0) {
    return { isValid: false, error: 'At least one ID must be selected' };
  }
  
  if (ids.length > 1000) {
    return { isValid: false, error: 'Maximum 1000 IDs can be selected' };
  }
  
  if (!ids.every(id => typeof id === 'number' && id > 0)) {
    return { isValid: false, error: 'All IDs must be positive numbers' };
  }
  
  return { isValid: true };
};

export const validateFilters = (filters) => {
  const requiredFields = ['recency', 'frequency', 'monetary'];
  
  for (const field of requiredFields) {
    if (!filters[field]) {
      return { isValid: false, error: `Missing ${field} filter` };
    }
    
    if (typeof filters[field].min !== 'number' || typeof filters[field].max !== 'number') {
      return { isValid: false, error: `${field} filter must have min and max values` };
    }
    
    if (filters[field].min < 1 || filters[field].max > 5) {
      return { isValid: false, error: `${field} filter values must be between 1 and 5` };
    }
    
    if (filters[field].min > filters[field].max) {
      return { isValid: false, error: `${field} min value cannot be greater than max value` };
    }
  }
  
  return { isValid: true };
};

export const validateCustomerData = (customer) => {
  if (!customer.id || typeof customer.id !== 'number') {
    return { isValid: false, error: 'Invalid customer ID' };
  }
  
  if (!customer.recency || typeof customer.recency !== 'number') {
    return { isValid: false, error: 'Invalid recency value' };
  }
  
  if (!customer.frequency || typeof customer.frequency !== 'number') {
    return { isValid: false, error: 'Invalid frequency value' };
  }
  
  if (!customer.monetary || typeof customer.monetary !== 'number') {
    return { isValid: false, error: 'Invalid monetary value' };
  }
  
  return { isValid: true };
}; 