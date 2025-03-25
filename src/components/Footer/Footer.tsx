import React from "react";

type FooterProps = {
  title: string;
  background: string;
};

const Footer: React.FC<FooterProps> = ({ background }) => {
  return (
    <footer
      className="text-white py-10 px-6 shadow-md relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-black bg-opacity-50 p-6 rounded-lg">
        {/* فرم تماس */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-center">با ما در ارتباط باشید</h3>
          <p className="text-center text-sm mb-4">با ارسال پیام از طریق فرم زیر، کارشناسان ما سریعاً با شما تماس خواهند گرفت</p>
          <form className="space-y-4">
            <input type="text" placeholder="نام" className="w-full p-2 border rounded-lg" />
            <input type="email" placeholder="نشانی ایمیل" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="موضوع" className="w-full p-2 border rounded-lg" />
            <textarea placeholder="پیام شما..." className="w-full p-2 border rounded-lg h-24"></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              ارسال پیام
            </button>
          </form>
        </div>
        
        {/* لینک‌های مفید */}
        <div>
          <h3 className="text-xl font-semibold mb-4">لینک‌های مفید</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">صفحه اصلی</a></li>
            <li><a href="#" className="hover:underline">همه دوره‌ها</a></li>
            <li><a href="#" className="hover:underline">درباره ما</a></li>
            <li><a href="#" className="hover:underline">تماس با ما</a></li>
          </ul>
        </div>
        
        {/* بخش اطلاعات */}
        <div>
          <h2 className="text-2xl font-bold mb-4">گروه آموزشی برهان</h2>
          <p className="mb-2">
            گروه آموزشی برهان بیش از 10 سال سابقه تدریس با نتایج درخشان در آزمون وکالت...
          </p>
          <p className="font-bold">ساعت کاری 8:30 صبح الی 20</p>
          <p className="mt-2">آدرس: مشهد، بلوار کوثر، بین کوثر شمالی 6 و 6/1</p>
        </div>
      </div>
      
      {/* کپی‌رایت */}
      <div className="text-center text-sm mt-8 border-t border-white pt-4 bg-black bg-opacity-50 p-2 rounded-lg">
        © کلیه حقوق مادی و معنوی وبسایت متعلق به گروه آموزشی برهان می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;