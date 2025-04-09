// src/hooks/useAuth.ts
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../store/slices/authSlice';
import { AppDispatch } from '../store/store';

interface UserData {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = (userData: UserData) => {
    dispatch(login(userData));
    navigate('/dashboard'); // ریدایرکت به داشبورد
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  return { handleLogin, handleLogout };
};
