// 전역에 관리할 설정
import { createContext, useState, useCallback } from 'react';

// const initalState = {
//   isLogin: false,
//   userInfo: {},
// };

const UserContext = createContext({
  state: {
    isLogin: false,
    userInfo: {},
  },
  //상태 변화값
  action: {
    setIsLogin: null,
    setUserInfo: null,
  },
});

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const value = {
    state: { isLogin, userInfo },
    action: { setIsLogin, setUserInfo },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };
export default UserContext;
