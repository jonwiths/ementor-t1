import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const StudentAuthContext = createContext();

const StudentAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('student_user')) || null
  );

  const login = async (inputs) => {
    const response = await axios.post(
      'http://localhost:8000/api/auth/login',
      inputs,
      {
        withCredentials: true
      }
    );

    setCurrentUser(response.data);
  };

  useEffect(() => {
    localStorage.setItem('student_user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <StudentAuthContext.Provider value={{ currentUser, login }}>
      {children}
    </StudentAuthContext.Provider>
  );
};

export default StudentAuthContextProvider;
