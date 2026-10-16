import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? '#f6b352' : 'white',
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none',
});

const Header = () => (
  <nav
    style={{
      display: 'flex',
      gap: '20px',
      padding: '15px 20px',
      background: '#1f2124',
      borderRadius: '5px',
      margin: '20px',
    }}
  >
    <NavLink to="." end style={linkStyle}>
      Home
    </NavLink>
    <NavLink to="about" style={linkStyle}>
      About
    </NavLink>
    <NavLink to="users" style={linkStyle}>
      Users
    </NavLink>
  </nav>
);

export default Header;
