import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../config/reactQueryClient';

const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
