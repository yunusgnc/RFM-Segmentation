import PropTypes from 'prop-types';
import { StatsCard, TabButton } from '../ui';
import { CustomerGridCell, CustomerListCard } from '../../features/rfm';

export default function MainContent({
  statsData,
  activeTab,
  onTabChange,
  gridData,
  filteredCustomers,
  selectedIds,
  onCustomerClick,
  getSegmentColor,
  getSegmentName
}) {
  return (
    <div className="xl:col-span-3">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-800 rounded-xl p-1 mb-6">
        <TabButton active={activeTab === 'grid'} onClick={() => onTabChange('grid')}>Grid View</TabButton>
        <TabButton active={activeTab === 'list'} onClick={() => onTabChange('list')}>List View</TabButton>
      </div>

      {activeTab === 'grid' ? (
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 h-[400px] sm:h-[500px] overflow-auto">
            {gridData.map((row, rowIndex) =>
              row.map((cellCustomers, colIndex) => (
                <CustomerGridCell
                  key={`${rowIndex}-${colIndex}`}
                  f={colIndex + 1}
                  m={5 - rowIndex}
                  customers={cellCustomers}
                  selectedIds={selectedIds}
                  onCustomerClick={onCustomerClick}
                  getSegmentColor={getSegmentColor}
                  getSegmentName={getSegmentName}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {filteredCustomers.map(customer => (
              <CustomerListCard
                key={customer.id}
                customer={customer}
                selected={selectedIds.includes(customer.id)}
                onClick={() => onCustomerClick(customer.id)}
                getSegmentName={getSegmentName}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

MainContent.propTypes = {
  statsData: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  gridData: PropTypes.array.isRequired,
  filteredCustomers: PropTypes.array.isRequired,
  selectedIds: PropTypes.array.isRequired,
  onCustomerClick: PropTypes.func.isRequired,
  getSegmentColor: PropTypes.func.isRequired,
  getSegmentName: PropTypes.func.isRequired
}; 