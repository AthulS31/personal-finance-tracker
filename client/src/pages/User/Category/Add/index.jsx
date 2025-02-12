import MainLayout from '../../../../components/MainLayout';
import axios from '../../../../utils/axios';
import { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './add.css';

const { TextArea } = Input;

const Add = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    name: '',
    image: '',
    about: '',
  });
  
  const onChange = (e, key) => {
    setCategory({ ...category, [key]: e.target.value });
  };


  const onAddCategory = async () => {
    try {
      const response = await axios.post('/category', category);
      navigate('/user/category')
    } catch (error) {
      toast.error(e.message);
    }
  };

  return (
    <MainLayout heading="Add Category">
      <ToastContainer/>
      <div className="add-category-form">
        <div className="input-container">
          <label>Name</label>
          <Input onChange={e => onChange(e, 'name')} />
        </div>
        <div className="input-container">
          <label>Image</label>
          <Input type="file" onChange={onUploadImage} />
        </div>
        <div className="input-container">
          <label>About</label>
          <TextArea rows={5} onChange={e => onChange(e, 'about')} />
        </div>
      </div>
      <div className="add-button-container">
        <Button onClick={onAddCategory}>Add</Button>
      </div>
    </MainLayout>
  );
};
export default Add;
