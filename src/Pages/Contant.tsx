const ContactUs = () => {
  
            return (
              <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
                <div className="bg-white/30 backdrop-blur-lg shadow-lg p-6 rounded-2xl max-w-lg w-full border border-white/50">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-right">
                    تماس با ما
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-right">
                    اگر سوالی دارید یا نیاز به راهنمایی دارید، از طریق فرم زیر با ما در ارتباط باشید.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="نام شما"
                      className="w-full p-3 rounded-lg border border-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 text-right"
                    />
                    <input
                      type="email"
                      placeholder="ایمیل شما"
                      className="w-full p-3 rounded-lg border border-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 text-right"
                    />
                    <textarea
                      placeholder="پیام شما..."
                      className="w-full p-3 h-32 rounded-lg border border-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 text-right"
                    ></textarea>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all">
                      ارسال پیام
                    </button>
                  </form>
                </div>
              </div>
            );
          };
          
          export default ContactUs;
          

  
  

  