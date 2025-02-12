import { Axios } from 'axios';
import MainLayout from '../../../../components/MainLayout';
import axios from '../../../../utils/axios';
import { Table, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';

const List = () => {
  const [categorys, setCategorys] = useState([]);
  const navigate = useNavigate();

  const getCategory = async () => {
    const response = await axios.get('/category');
    setCategorys(response.data);
  };

  const goToAddCategory = async () => {
    navigate('/user/add-category');
  };

  useEffect(() => {
    getCategory();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      render: id => <a>{id}</a>,
    },
  ];

  return (
    <MainLayout heading="Category">
      <div className="category-container">
        <div className="category-btn-container">
          <Button onClick={goToAddCategory}>Add Category</Button>
        </div>
        <Table dataSource={categorys} columns={columns} />;
      </div>
    </MainLayout>
  );
};
export default List;
