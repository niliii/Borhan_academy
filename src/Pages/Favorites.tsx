import React from "react";

const products = [
  {
    id: 1,
    name: "تجربه اولیه میدانی: خوب بیاموزید",
    price: "59000 تومان",
    stock: "در انبار",
  },
  {
    id: 2,
    name: "دانشجوی آنلاین: راهکارهایی برای یادگیری مؤثر",
    price: "67000 تومان",
    stock: "در انبار",
  },
  {
    id: 3,
    name: "اصول مدیریت بازرگانی",
    price: "52000 تومان",
    stock: "ناموجود",
  },
];

const Favorites: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">علاقه‌مندی‌ها</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white">
              <th className="p-3 border border-gray-300 dark:border-gray-600">تصویر</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">محصول</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">قیمت</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">وضعیت انبار</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">افزودن به سبد</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">حذف شده</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-gray-100 dark:bg-gray-800"
                } text-gray-700 dark:text-white`}
              >
                <td className="p-3 border border-gray-300 dark:border-gray-600">محصول</td>
                <td className="p-3 border border-gray-300 dark:border-gray-600">{product.name}</td>
                <td className="p-3 border border-gray-300 dark:border-gray-600">{product.price}</td>
                <td className="p-3 border border-gray-300 dark:border-gray-600">{product.stock}</td>
                <td className="p-3 border border-gray-300 dark:border-gray-600">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                    افزودن به سبد
                  </button>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-600 text-center">❌</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;
