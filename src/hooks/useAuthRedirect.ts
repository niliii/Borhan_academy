import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'store/auth';



export const useAuthRedirect = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
};
