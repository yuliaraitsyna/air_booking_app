import { Link } from 'react-router-dom'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import styles from './Navigation.module.css';
import { Button, Typography } from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Navigation() {
  const context = useAuthContext();
  const { logout } = useAuthContext();

  const handleButtonClick = () => {
    if(!context.isAuthenticated) {
        logout();
    }
  }

  return (
    <nav className={styles.nav}>
        <Link to="/">
                <AirplanemodeActiveIcon color='primary' className={styles.icon}/>
        </Link>
        <Typography variant='h6'>Air service</Typography>
        <ul className={styles.list}>
            <li>
                <Link to="/tickets">
                    <Typography>Tickets</Typography>
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    <Typography>Profile</Typography>
                </Link>
            </li>
        </ul>
        <Button onClick={handleButtonClick}>
            <Link to="/auth">
                {context.isAuthenticated ? 'Logout' : <Link to="/auth?mode=login">Login</Link>}
            </Link>
        </Button>
    </nav>
  )
}
