import { Button, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import './login.css';
import Password from 'antd/es/input/Password';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  // 1.  localStorage.setItem('ID', 'sdfnjkdmsf'); - To set data to LS as ID
  // 2.  const id = localStorage.getItem('ID');- Get Data from LS
  // 3.  localStorage.removeItem('ID'); - Delete data

  console.log(login);

  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };

  const onLogin = async () => {
    try {
      const response = await axios.post('/user/login', login);
      localStorage.setItem('ID', response.data.id);
      localStorage.setItem('TOKEN', response.data.token);
      localStorage.setItem('ROLE', response.data.role);
      navigate('/user/home');
      console.log(response);
    } catch (e) {
      if (e.status == 400) {
        toast.error('Email or Password incorrect');
      } else {
        toast.error(e.message);
      }
    }
  };

  return (
    <div className="user-login">
      <ToastContainer />
      <div className="user-login-sec">
      <div className="user-login-form">
        <div className="heading">
          <h1>SpendWise </h1>
          <span>Admin</span>
        </div>
        <label>Email:</label>
        <Input
          onChange={e => {
            onChange(e, 'email');
          }}
        />
        <label>Password:</label>
        <Input
          type="password"
          onChange={e => {
            onChange(e, 'password');
          }}
        />
        <div className="login-btn-container">
          <Button className="login-btn" onClick={onLogin}>
            Login
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
