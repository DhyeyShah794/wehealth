import { React, useState, useEffect } from 'react';
import NavigationBar from './Components/navbar';
import { Route, Routes, Outlet } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import Login from './Pages/login';
import Signup from './Pages/signup';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


/**
 * Layout is a function that returns a div with a NavigationBar and children.
 * @returns The children of the Layout component.
 */
const Layout = ({ children }) => {

  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}

const App = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;