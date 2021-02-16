import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}
export default App;
// import CreateUser from './CreateUser';
// //import Hello from './Hello';
// import UserList from './UserList';
// //import Wapper from './Wrapper';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중.............................................................................');
//   return users.filter(user => user.active).length;
// }

//  function App() {
// const [inputs, setInputs] = useState({
//   username: '',
//   email: ''
// });

// const { username, email } = inputs;
// const onChange = e => {
//   const { name, value } = e.target;
//   setInputs({
//     ...inputs,
//     [name]: value
//   });
// };

// const [users, setUsers] = useState([
//   {
//     id: 1,
//     username: "velopert",
//     email: "public.velopert@gmail.com",
//     active: true
//   },
//   {
//     id: 2,
//     username: "tester",
//     email: "tester@example.com",
//     active: false
//   },
//   {
//     id: 3,
//     username: "liz",
//     email: "liz@example.com",
//     active: false
//   }
// ]);

// const nextId = useRef(4);

// const onCreate = () => {
//   const user = {
//     id: nextId.current,
//     username,
//     email
//   };
//   setUsers(users.concat(user));

//   setInputs({
//     username: '',
//     email: ''
//   });
//   nextId.current += 1;
// };
// const onRemove = (id) => {
//   setUsers(users.filter(user => user.id !== id));
// };

// const onToggle = id => {
//   setUsers(
//     users.map(user =>
//       user.id === id ? {...user,active: !user.active} : user)
//   );
// };
// const count = countActiveUsers(users)
// return (
// // <Wapper>
// //  <Hello name="react" color="red" isSpecial />
// //  <Hello color="pink" />

// //</Wapper>
// //<Counter />
// //<InputSample /> 
// <>
//   <CreateUser
//     username={username}
//     email={email}
//     onChange={onChange}
//     onCreate={onCreate}
//   />
//   <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
//   <div>활성사용자 수 : {count}</div>
// </>
// );
// }


