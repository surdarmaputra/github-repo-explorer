import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
];
