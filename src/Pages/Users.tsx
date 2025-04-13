import { useUserStore } from "../store/useUserStore";

const Users = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {users.map((Users) => (
          <li key={user.id} className="p-2 bg-white shadow my-2 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
