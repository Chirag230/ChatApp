import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";



const SignUp = () => {

	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [gender, setGender] = useState("");

	const { loading, signup } = useSignup();

		const handleCheckboxChange = (gender) => {
			setGender(gender);
		};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const inputs = { fullName, username, password, confirmPassword, gender };
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
				<div>
					<label className="label p-2">
					<span className="text-base label-text">Full Name</span>
					</label>
					<input
					type="text"
					placeholder="Enter your full name"
					className="w-full input input-bordered h-10"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					/>
				</div>

				<div>
					<label className="label p-2">
					<span className="text-base label-text">Username</span>
					</label>
					<input
					type="text"
					placeholder="Enter username"
					className="w-full input input-bordered h-10"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<div>
					<label className="label">
					<span className="text-base label-text">Password</span>
					</label>
					<input
					type="password"
					placeholder="Enter Password"
					className="w-full input input-bordered h-10"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div>
					<label className="label">
					<span className="text-base label-text">Confirm Password</span>
					</label>
					<input
					type="password"
					placeholder="Confirm Password"
					className="w-full input input-bordered h-10"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>

				<GenderCheckbox
				onCheckboxChange={handleCheckboxChange}
				selectedGender={gender}
          />

					<Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
					Already have an account?
					</Link>

					<div>
						<button
						className="btn btn-block btn-sm mt-2 border border-slate-700"
						disabled={loading}
						>
						{loading ? (
							<span className="loading loading-spinner"></span>
						) : (
							"Sign Up"
						)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;