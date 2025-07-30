import PropTypes from 'prop-types';
import { FilterDropdown, SubmitButton } from '../ui';
import { useLanguage } from '../hooks/useLanguage';
import { FaFilter } from 'react-icons/fa';

export default function Sidebar({
  filters,
  activeFilter,
  onFilterChange,
  onQuickFilter,
  onResetFilters,
  onActiveFilterChange,
  onSubmit,
  isLoading,
  selectedCount
}) {
  const { t } = useLanguage();
  
  const filterConfigs = [
    {
      type: "recency",
      label: t('sidebar.recencyScore'),
      icon: <FaFilter className="w-4 h-4 text-blue-400" />
    },
    {
      type: "frequency", 
      label: t('sidebar.frequencyScore'),
      icon: <FaFilter className="w-4 h-4 text-green-400" />
    },
    {
      type: "monetary",
      label: t('sidebar.monetaryScore'), 
      icon: <FaFilter className="w-4 h-4 text-purple-400" />
    }
  ];

  return (
    <div className="xl:col-span-1">
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 sticky top-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <FaFilter className="w-5 h-5 mr-2 text-blue-400" /> {t('sidebar.title')}
          </h3>
          <button
            onClick={onResetFilters}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {t('sidebar.resetFilters')}
          </button>
        </div>
        <div className="space-y-3">
          {filterConfigs.map((config) => (
            <FilterDropdown
              key={config.type}
              {...config}
              currentFilter={filters[config.type]}
              isActive={activeFilter === config.type}
              onOpen={() => onActiveFilterChange(activeFilter === config.type ? null : config.type)}
              onQuickFilter={onQuickFilter}
              onCustomChange={onFilterChange}
              onClose={() => onActiveFilterChange(null)}
            />
          ))}
        </div>
        <SubmitButton
          onClick={onSubmit}
          isLoading={isLoading}
          selectedCount={selectedCount}
        />
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  filters: PropTypes.object.isRequired,
  activeFilter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
  onQuickFilter: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
  onActiveFilterChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  selectedCount: PropTypes.number.isRequired
}; 