import { Axios } from 'axios';
import AdminLayout from '../../../../components/AdminLayout';
import axios from '../../../../utils/axios';
import { Table, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';

const List = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  const getTransaction = async () => {
    const response = await axios.get('/transaction');
    setTransactions(response.data);
  };

  const goToAddTransaction = async () => {
    navigate('/admin/add-transaction');
  };

  useEffect(() => {
    getTransaction();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      //   render:() => <a>hello</a>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Categorys',
      dataIndex: 'category',
      key: 'category',
      render: categorys => {
        return (
        <div className="category-list">
            {categorys.map(item => (
                <p>{item.name}</p>
            ))}
        </div>
        );
    },
    },
    {
      title: 'About',
      dataIndex: 'about',
      key: 'about',
    },
  ];

  return (
    <AdminLayout heading="Transaction">
      <div className="transaction-container">
        <div className="transaction-btn-container">
          <Button onClick={goToAddTransaction}>Add Transaction</Button>
        </div>
        <Table dataSource={transactions} columns={columns} />
      </div>
    </AdminLayout>
  );
};
export default List;
