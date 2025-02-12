import AdminLayout from '../../../../components/AdminLayout';
import axios from '../../../../utils/axios';
import { useState, useEffect } from 'react';
import { Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './add.css';

const { TextArea } = Input;

const Add = () => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    name: '',
    category: [],
  });
  const [categorys, setCategorys] = useState([]);

  const getCategory = async () => {
    const response = await axios.get('/category');
    const convertedData = response.data.map(item => {
      return { value: item._id, label: item.name };
    });
    setCategorys(convertedData);
  };

  useEffect(() => {
    getCategory();
  }, []);

  console.log(categorys);

  const onChange = (e, key) => {
    console.log(e);
    if(key == 'category'){
      setTransaction({ ...transaction, category:e });
    }
    else setTransaction({ ...transaction, [key]: e.target.value });
  };

  const onUploadImage = async e => {
    const formData = new FormData();
    console.log(e.target.files[0]);
    formData.append('avatar', e.target.files[0]);
    const response = await axios.post('/upload', formData);
    console.log(response);
    setTransaction({ ...transaction, image: response.data.url });
  };

  const onAddTransaction = async () => {
    try {
      const response = await axios.post('/transaction', transaction);
      navigate('/user/transaction');
    } catch (error) {
      toast.error(e.message);
    }
  };

  return (
    <AdminLayout heading="Add Transaction">
      <ToastContainer />
      <div className="add-transaction-form">
        <div className="input-container">
          <label>Name</label>
          <Input onChange={e => onChange(e, 'name')} />
        </div>
        <div className="input-container">
          <label>Image</label>
          <Input type="file" onChange={onUploadImage} />
        </div>
        <div className="input-container">
          <label>Phone Number</label>
          <Input onChange={e => onChange(e, 'phonenumber')} />
        </div>
        <div className="input-container">
          <label>Location</label>
          <Input onChange={e => onChange(e, 'location')} />
        </div>
        <div className="input-container">
          <label>Categorys</label>
          <Select mode="multiple" options={categorys} onChange={e => onChange(e, 'category')} />
        </div>
        <div className="input-container">
          <label>About</label>
          <TextArea rows={5} onChange={e => onChange(e, 'about')} />
        </div>
      </div>
      <div className="add-button-container">
        <Button onClick={onAddTransaction}>Add</Button>
      </div>
    </AdminLayout>
  );
};
export default Add;
