import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            navigate('/dashboard/student');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="input-field" name="username" required />
                    <input type="password" placeholder="Password" className="input-field" name="password" required />
                    <button type="submit" className="btn-primary">Log In</button>
                </form>
                <div className="mt-4 text-center">
                    <button className="text-blue-500 hover:underline">Forgot Password?</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
