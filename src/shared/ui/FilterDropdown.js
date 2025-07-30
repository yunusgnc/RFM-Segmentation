import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FilterDropdown({
  type,
  label,
  icon,
  currentFilter,
  isActive,
  onOpen,
  onQuickFilter,
  onCustomChange,
  onClose
}) {
  // Safety check for undefined currentFilter
  if (!currentFilter || typeof currentFilter.min === 'undefined' || typeof currentFilter.max === 'undefined') {
    return null;
  }

  const presets = [
    { name: 'All', min: 1, max: 5, color: 'bg-gray-500' },
    { name: 'High', min: 4, max: 5, color: 'bg-green-500' },
    { name: 'Medium', min: 2, max: 4, color: 'bg-yellow-500' },
    { name: 'Low', min: 1, max: 2, color: 'bg-red-500' },
    { name: 'Custom', min: currentFilter.min, max: currentFilter.max, color: 'bg-blue-500' }
  ];

  const handlePresetClick = useCallback((preset) => {
    onQuickFilter(type, { min: preset.min, max: preset.max });
    if (preset.name !== 'Custom') onClose();
  }, [type, onQuickFilter, onClose]);

  const handleCustomChange = useCallback((field, value) => {
    onCustomChange(type, field, value);
  }, [type, onCustomChange]);

  const renderNumberButton = useCallback((num, field) => (
    <button
      key={num}
      onClick={() => handleCustomChange(field, num)}
      className={`w-6 h-6 rounded text-xs font-medium transition-all duration-200 ${
        currentFilter[field] === num
          ? 'bg-blue-600 text-white'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      {num}
    </button>
  ), [currentFilter, handleCustomChange]);

  return (
    <div className="relative">
      <button
        onClick={onOpen}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
        }`}
      >
        <div className="flex items-center">
          <div className="p-1.5 bg-white/20 rounded mr-2">{icon}</div>
          <div className="text-left">
            <div className="text-sm font-medium">{label}</div>
            <div className="text-xs opacity-75">
              {currentFilter.min} - {currentFilter.max}
            </div>
          </div>
        </div>
        <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
      </button>

      {isActive && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-lg border border-gray-600 p-3 z-10 shadow-lg">
          <div className="space-y-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => handlePresetClick(preset)}
                className={`w-full flex items-center justify-between p-2 rounded transition-all duration-200 ${
                  preset.min === currentFilter.min && preset.max === currentFilter.max
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${preset.color} mr-2`}></div>
                  <span className="text-sm font-medium">{preset.name}</span>
                </div>
                <span className="text-xs">
                  {preset.min} - {preset.max}
                </span>
              </button>
            ))}
            <div className="pt-2 border-t border-gray-600">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Min</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(num => renderNumberButton(num, 'min'))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Max</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(num => renderNumberButton(num, 'max'))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

FilterDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  currentFilter: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onQuickFilter: PropTypes.func.isRequired,
  onCustomChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}; 