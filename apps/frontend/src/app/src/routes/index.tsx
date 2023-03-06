import { createBrowserRouter } from 'react-router-dom';
import DashboardScreen from '../screens/Dashboard';
import TaskScreen from '../screens/Task';
import NewLogin from '../screens/NewLogin';
import NewSignup from '../screens/NewSignup';
import NewDashboard from '../screens/NewDashboard';
import NewTask from '../screens/NewTask';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NewLogin />,
  },

  {
    path: '/signup',
    element: <NewSignup />,
  },

  {
    path: '/dashboard',
    element: <NewDashboard />,
  },
  {
    path: '/task',
    element: <NewTask />,
  },
]);

export default router;
