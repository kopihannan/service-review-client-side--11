import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../components/context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    if (loading) {
      return <div className='text-center'><SyncLoader color="#36d7b7" /></div>
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  
};

export default PrivateRoute;