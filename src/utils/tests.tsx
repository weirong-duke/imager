import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "react-query";
import React from 'react';

const queryClient = new QueryClient();
const renderWithWrappers = (child: React.ReactNode) => {

  return render(
    <QueryClientProvider client={queryClient}>
      {child}
      </QueryClientProvider>
  )
}

export {
  renderWithWrappers
}
