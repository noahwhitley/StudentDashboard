import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('student');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Filler data for demo purposes
        const validLogins = {
            student: { username: 'student123', password: 'student123' },
            admin: { username: 'admin123', password: 'admin123' }
        };

        const userLogin = validLogins[userType];
        if (username === userLogin.username && password === userLogin.password) {
            if (userType === 'student') {
                navigate('/student-dashboard');
            } else if (userType === 'admin') {
                navigate('/admin-dashboard');
            }
        } else {
            setError('Invalid username or password.');
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
        } else {
            handleLogin();
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-blue-200">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome Back!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="input-field" name="username" required />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input-field" name="password" required />
                    </div>
                    <div className="mb-4">
                        <select value={userType} onChange={e => setUserType(e.target.value)} className="input-field">
                            <option value="student">Student</option>
                            <option value="admin">Administrator</option>
                        </select>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button type="submit" className="btn-primary w-full">Log In</button>
                </form>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
                <button onClick={() => navigate('/student-dashboard')} className="btn-bubble bg-blue-600 text-white p-1 rounded-full">Student Dashboard</button>
                <button onClick={() => navigate('/admin-dashboard')} className="btn-bubble bg-blue-600 text-white p-1 rounded-full">Admin Dashboard</button>
            </div>
        </div>
    );
};

export default LoginPage;
