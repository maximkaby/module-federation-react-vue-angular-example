import { Link, useParams } from 'react-router-dom';

const users = ['Alice', 'Bob', 'Charlie'];

export const UserList = () => (
  <div style={{ margin: '20px' }}>
    <h2>Users</h2>
    <ul>
      {users.map((name, id) => (
        <li key={name}>
          <Link to={String(id)}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const UserDetails = () => {
  const { id } = useParams();
  const name = users[Number(id)];

  return (
    <div style={{ margin: '20px' }}>
      <h2>{name ?? 'Unknown user'}</h2>
      <Link to=".." relative="path">
        Back to users
      </Link>
    </div>
  );
};
