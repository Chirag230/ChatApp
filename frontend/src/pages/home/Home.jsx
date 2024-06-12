import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";
const Home = () => {
	return (
		<div className='flex sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;