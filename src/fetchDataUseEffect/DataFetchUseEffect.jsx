import React, { useEffect, useState, Fragment } from "react";

const DataFetchUseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>usersList</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DataFetchUseEffect;
