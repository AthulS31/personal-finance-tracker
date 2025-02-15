import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/User/Home';
import UserLogin from './pages/User/Login';
// // import ListCategory from './pages/User/Category/List';
// import PrivateRoute from './components/PrivateRoute';

import PublicNavbar from "./components/Navbar/Public";

// import './App.css';
const App = () => {
  return (
    <>
    <PublicNavbar/>
    <Routes>
      <Route path="/user/login/" element={<UserLogin />} />

      {/* <Route path="/user" element={<PrivateRoute />}> */}
        <Route path="/user/home/" element={<HomePage />} />
        {/* <Route path="/user/category/" element={<ListCategory />} /> */}

      {/* </Route> */}
    </Routes>
    </>
  );
};
export default App;
