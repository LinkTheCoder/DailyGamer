import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const QueryClientProviderWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
