import AdminLayout from '../../../components/AdminLayout';
// import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  return (
    <AdminLayout heading="Profile">
      <div className="profile-container">
        <div className="welcome-msg">
          Welcome to SpendWise
        </div>

        <div className="profile-btn-container">
          {/* <Button onClick={}>Home</Button> */}
        </div>
      </div>
    </AdminLayout>
  );
};
export default Profile;
