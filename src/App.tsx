import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { Spent } from './pages/spent'
import { Me } from './pages/me'
import { NotFoundPage } from './pages/notFoundPage'

function App() {
  const Routes = createBrowserRouter([{
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
    ErrorBoundary: NotFoundPage

  },
{
  path:'/spent',
  element: <Spent />,
},{path:'/me',
  element: <Me/>}])
  return (
   <RouterProvider router={Routes}></RouterProvider>
  )
}

export default App
