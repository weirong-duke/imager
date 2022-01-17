import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from 'pages/App';

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

