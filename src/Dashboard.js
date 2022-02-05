import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
     
      <nav id="sidebar">
      Welcome {user.name}!<br /><br />
                <div className="sidebar-header">

                </div>

                <ul className="list-unstyled components">
                    <li>
                        <NavLink to="/indianchef_table">Indian Chef</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curry_table" >Curry Express</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/chalandri_table">Curry Express Chalandri</NavLink>
                    </li>
                    <li>
                        <NavLink to="/royal_table">Royal Indian Chef</NavLink>
                    </li>
                </ul>
                <input  type="button" onClick={handleLogout} value="Logout" />
            </nav>
     </div>
  );



  }
export default Dashboard;
