import { useEffect, useState } from "react";
import { instance } from "../../utility";

export const User = () => {
  const [user, setUser] = useState<any>(null);

  const load = async () => {
    const { data } = await instance.get("/api/user");
    setUser(data);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <h2>User info</h2>
      <p>Id: {user?.id}</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};
