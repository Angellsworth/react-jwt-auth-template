// src/components/Dashboard/Dashboard.jsx
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService'
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);;

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const fetchedUsers = await userService.index()
            setUsers(fetchedUsers)
        } catch (error) {
            console.log(error)
        }
    }
    if (user) fetchUsers()
  }, [user])

  return (
    <main className="dashboard">
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
      <ul className="user-list">
        {
          users.map(user => (
            <li key={user._id}>{user.username}</li>
          ))
        }
      </ul>
    </main>
  );
};

export default Dashboard;

