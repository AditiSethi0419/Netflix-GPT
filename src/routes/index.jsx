// routes/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Browse from '../components/Browse';
import Login from '../components/Login';
import Body from '../components/Body'; 

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />, 
    children: [

      {
        path: 'browse',
        element: <Browse />,
      },
      {
        path: 'login', 
        element: <Login />,
      },
    ],
  },
]);

export default appRouter;
