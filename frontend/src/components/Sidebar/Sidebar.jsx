import SearchInput from "./SeachInput.jsx"
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton.jsx";
const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar