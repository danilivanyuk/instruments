import { RouterProvider } from 'react-router-dom';
import { router } from '../routs';

export const BrowserRouterProvider = () => {
  return <RouterProvider router={router} />;
};
