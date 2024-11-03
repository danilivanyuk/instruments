import { FunctionComponent } from 'react';
import { QueryProvider } from './providers';
import { BrowserRouterProvider } from './providers/browserRouterProvider';

export const App: FunctionComponent = () => (
  <QueryProvider>
    <BrowserRouterProvider />
  </QueryProvider>
);
