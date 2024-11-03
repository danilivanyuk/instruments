import { AppRouts } from '@/shared/constants/appRouts';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: AppRouts.moneyManager,
    lazy: () =>
      import('@/pages/balance').then(({ Balance }) => ({ Component: Balance })),
  },
]);
