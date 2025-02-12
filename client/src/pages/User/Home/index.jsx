import AdminLayout from '../../../components/MainLayout';
// import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <AdminLayout heading="Home">
      <div className="home-container">
        <div className="welcome-msg">
          Welcome to SpendWise
          <br />
          Manage your savings effortlessly with the perfect finance assistant.
        </div>
        <div className="home-intro">
          Take control of your financial future with SpendWise - the intuitive,
          user-friendly platform designed to help you manage your money, track
          expenses, and achieve your financial goals effortlessly.
          <ul>
            <li>Comprehensive Transaction Management</li>
            <li>Insightful Analytics</li>
            <li>Set goals and budgets</li>
          </ul>
          <br />
          Join the thousands who are already taking charge of their finances.
          With SpendWise, budgeting becomes simple, insights become actionable,
          and every rupee counts.
        </div>
        <div className="home-btn-container">
          {/* <Button onClick={goToAddHospital}>Add Hospital</Button> */}
        </div>
      </div>
    </AdminLayout>
  );
};
export default Home;
