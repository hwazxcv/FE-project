// 전역에 관리할 설정
import { createContext, useState, useCallback } from 'react';
import { getUserInfo } from '../api/member/login';

const initialState = {
  state: { isLogin: false, userInfo: {} },
  action: { setIsLogin: null, setUserInfo: null },
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [userInfo, setUserInfo] = useState({});

  const updateUserInfo = useCallback(() => {
    //로그인상태일떄는 요청을 보낼 이유가 없다.
    if (isLogin) {
      return;
    }
    getUserInfo()
      .then((userInfo) => {
        setUserInfo(() => userInfo);
        setIsLogin(true); // 로그인 여부
        setIsAdmin(userInfo.type === 'ADMIN'); // 관리자 여부
      })
      .catch((err) => console.error(err));
  }, [isLogin]);

  const value = {
    state: { isLogin, isAdmin, userInfo },
    action: { setIsLogin, setIsAdmin, setUserInfo, updateUserInfo },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;
