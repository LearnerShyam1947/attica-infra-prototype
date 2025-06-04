


const Chatbot = () => {


  return (
    <div className="fixed bottom-4 right-4 z-50">
      
      <button
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <a target='_blank'  href='https://api.whatsapp.com/send?phone=917899997784'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </a>
      </button>

    </div>
  );
};

export default Chatbot;