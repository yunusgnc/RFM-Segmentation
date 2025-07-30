import React from 'react';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useLanguage } from '../../../shared/hooks/useLanguage';

export default function CustomerGridCell({ f, m, customers, selectedIds, onCustomerClick, getSegmentColor, getSegmentName }) {
  const { t } = useLanguage();
  const isEmpty = customers.length === 0;

  const handleCustomerClick = useCallback((customerId) => {
    onCustomerClick(customerId);
  }, [onCustomerClick]);

  const renderCustomerCard = useCallback((customer) => (
    <div
      key={customer.id}
      onClick={() => handleCustomerClick(customer.id)}
      className={`p-1.5 sm:p-2 rounded cursor-pointer transition-all duration-200 text-xs ${
        selectedIds.includes(customer.id)
          ? 'bg-white text-gray-900 shadow-lg scale-105'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      <div className="font-medium">{t('customer.id')}: {customer.id}</div>
      <div className="text-gray-300 text-xs">
        {t('rfm.recency')}:{customer.recencyScore} {t('rfm.frequency')}:{customer.frequencyScore} {t('rfm.monetary')}:{customer.monetaryScore}
      </div>
    </div>
  ), [selectedIds, handleCustomerClick, t]);

  const getCustomerCountText = () => {
    if (customers.length === 0) {
      return t('segments.noCustomers');
    } else if (customers.length === 1) {
      return `1 ${t('segments.customer')}`;
    } else {
      return `${customers.length} ${t('segments.customers')}`;
    }
  };

  return (
    <div
      className={`relative rounded-lg p-2 sm:p-3 transition-all duration-300 hover:scale-105 ${
        isEmpty 
          ? 'bg-gray-700 border border-gray-600' 
          : `bg-gradient-to-br ${getSegmentColor(f, m)} border border-white/20`
      }`}
    >
      <div className="text-center mb-1 sm:mb-2">
        <div className="text-xs text-gray-400 mb-1">F{f}M{m}</div>
        <div className="text-xs sm:text-sm font-semibold text-white">
          {getSegmentName(f, m, t)}
        </div>
        <div className="text-xs text-gray-300">
          {getCustomerCountText()}
        </div>
      </div>
      <div className="space-y-1 max-h-24 sm:max-h-32 overflow-y-auto">
        {customers.map(renderCustomerCard)}
      </div>
    </div>
  );
}

CustomerGridCell.propTypes = {
  f: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired,
  customers: PropTypes.array.isRequired,
  selectedIds: PropTypes.array.isRequired,
  onCustomerClick: PropTypes.func.isRequired,
  getSegmentColor: PropTypes.func.isRequired,
  getSegmentName: PropTypes.func.isRequired
}; 