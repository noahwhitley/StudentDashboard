import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
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
                <h1 className="text-3xl font-bold mb-4">Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <select className="input-field mb-4" name="select-box" required>
                        <option value="">Please choose an option</option>
                        <option value="student">Student</option>
                        <option value="admin">Administrator</option>
                    </select>
                    <input type="text" placeholder="First Name" className="input-field" name="fname" required />
                    <input type="text" placeholder="Last Name" className="input-field" name="lname" required />
                    <input type="text" placeholder="Username" className="input-field" name="username" required />
                    <input type="password" placeholder="Password" className="input-field" name="password" required />
                    <input type="password" placeholder="Confirm Password" className="input-field" name="confirm-pw" required />
                    <input type="email" placeholder="Email" className="input-field" name="email" required />
                    <input type="tel" placeholder="Phone Number" className="input-field" name="tel" required />
                    <input type="text" placeholder="Address" className="input-field" name="address" required />
                    <button type="submit" className="btn-primary">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
