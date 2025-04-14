import { useUserStore } from "../store/useUserStore";

const Users = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">لیست کاربران</h1>

      {users.length === 0 ? (
        <p className="text-gray-500">هیچ کاربری وجود ندارد.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="p-3 bg-white dark:bg-gray-800 shadow rounded mb-2"
            >
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
