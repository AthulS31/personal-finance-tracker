import { checkToken } from '../../utils';
import axios from '../../utils/axios';

// TOKEN FROM LOCALSTORAGE
const token = checkToken();

// CREATE
export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const response = await axios.post(`/transaction`, {
    category,
    date,
    description,
    amount,
    type,
  });
  return response.data;
};

// DISPLAY
export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const response = await axios.get(`/transaction/list`, {
    params: { category, endDate, startDate, type },
  });
  return response.data;
};

// UPDATE
export const updateTransactionAPI = async ({ type,amount,category,date,description, id }) => {
  const response = await axios.put(`/transaction/update/${id}`, {
    type,
    amount,
    category,
    date,
    description,
  });
  return response.data;
};

// DELETE
export const deleteTransactionAPI = async id => {
  const response = await axios.delete(`/transaction/delete/${id}`);
  return response.data;
};
