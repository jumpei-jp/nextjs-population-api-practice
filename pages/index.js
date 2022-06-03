import { useState, useEffect } from "react";

export default function Home(){
  const [users, setUsers] = useState([]); //usersはステートの変数、setUsersはステートを更新する関数 初期値が配列？
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users);
    }
    fetchUsers()
  },[]);

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}