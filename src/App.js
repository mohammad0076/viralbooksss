import logo from './logo.svg';
import './App.css';
import { router } from './Com/routes/Routes';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div >

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
