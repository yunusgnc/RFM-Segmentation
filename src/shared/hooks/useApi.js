import { useMutation } from '@tanstack/react-query';

export const useSubmitSelectedIds = () => {
  return useMutation({
    mutationFn: async (selectedIds) => {
      if (!Array.isArray(selectedIds) || selectedIds.length === 0) {
        throw new Error('Invalid selected IDs');
      }

      if (selectedIds.length > 1000) {
        throw new Error('Too many selected IDs (max 1000)');
      }

      const response = await fetch('/api/selected-ids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedIds }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    },
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    onError: (error) => {
      console.error('API Error:', error);
    }
  });
}; 