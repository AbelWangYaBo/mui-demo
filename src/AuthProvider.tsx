import * as React from "react";
import { useState } from "react";
import { Navigate } from "react-router";

const fakeAuthProvider = () => {
  return {};
};

// 验证上下文空间
const AuthContext = React.createContext(null);

// 利用useContext导出验证上下文，供其它组件使用
export function useAuth() {
  return React.useContext(AuthContext);
}

// 验证提供者
export default function AuthProvider({ children }) {
  // 创建验证组件状态
  const [user, setUser] = useState(null);

  // 登录验证
  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  // 退出登录
  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  console.log("AuthContext");

  // 传递验证上下文(AuthContext)属性给嵌套的插槽children子组件(App)
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
