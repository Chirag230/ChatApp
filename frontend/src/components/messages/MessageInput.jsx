import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="relative px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-white-500 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
