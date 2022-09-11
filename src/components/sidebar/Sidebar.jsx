import "./sidebar.scss";
import { Dashboard, PersonOutline, LocalShipping, CreditCard, Store, InsertChart, SettingsApplications, ExitToApp, NotificationsNone, SettingsSystemDaydreamOutlined, PsychologyOutlined, AccountCircleOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="titile">MAIN</p>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Dashboard className="icon" /> <span>Dashboard</span>
            </Link>
          </li>
          <p className="titile">Lists</p>
          <li>
            <Link to='/users' style={{ textDecoration: 'none' }}>
              <PersonOutline className="icon" /><span>Users</span>
            </Link>
          </li>

          <li>
            <Link to='/products' style={{ textDecoration: 'none' }}>
              <Store className="icon" /><span>Products</span>
            </Link>
          </li>

          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <CreditCard className="icon" /><span>orders</span>
            </Link>
          </li>

          <li>
            <LocalShipping className="icon" /> <span>Delivery</span>
          </li>
          <p className="titile">USEFUL</p>
          <li>
            <InsertChart className="icon" /> <span>Stats</span>
          </li>

          <li>
            <NotificationsNone className="icon" /><span>Notification</span>
          </li>
          <p className="titile">Service</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" /><span>System Health</span>
          </li>

          <li>
            <PsychologyOutlined className="icon" /><span>Logs</span>
          </li>
          <p className="titile">User</p>
          <li>
            <SettingsApplications className="icon" /><span>Setting</span>
          </li>

          <li>
            <AccountCircleOutlined className="icon" /><span>Profile</span>
          </li>

          <li>
            <ExitToApp className="icon" /> <span>Logout</span>
          </li>

        </ul>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
