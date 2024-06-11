import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import StudentDashboard from './pages/student/StudentDashboard';
import MyClasses from './pages/student/MyClasses';
import MyAccount from './pages/student/MyAccount';
import RegisterForClasses from './pages/student/RegisterForClasses';
import AdminDashboard from './pages/admin/AdminDashboard';
import TeachingClasses from './pages/admin/TeachingClasses';
import AdminAccount from './pages/admin/AdminAccount';
import RegisteredStudents from './pages/admin/RegisteredStudents';
import EditStudent from './pages/admin/EditStudentPopup';
import LoginPage from './pages/logins/LoginPage';
import CreateAccount from './pages/logins/CreateAccount';
import Layout from './pages/logins/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/my-classes" element={<MyClasses />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/register-for-classes" element={<RegisterForClasses />} />
                <Route path="/admin-classes" element={<TeachingClasses />} />
                <Route path="/registered-students" element={<RegisteredStudents />} />
                <Route path="/admin-account" element={<AdminAccount />} />
            </Routes>
        </Router>
    );
}

export default App;
