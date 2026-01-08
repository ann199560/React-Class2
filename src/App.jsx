import { useState } from "react";
import axios from "axios";

import "./assets/style.css";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function App() {
  // 表單資料狀態（儲存登入表單輸入）
  const [formData, setFormData] = useState({
    username: "ann199560@gmail.com",
    password: "12345678",
  });

  // 登入狀態管理（控制顯示登入或產品頁）
  const [isAuth, setIsAuth] = useState(false);

  // 產品資料狀態
  const [products, setProducts] = useState([]);

  // 目前選中的產品
  const [tempProduct, setTempProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${API_BASE}/admin/signin`, formData);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {!isAuth ? (
        <div className="container login">
          <h1>請先登入</h1>
          <h2>week2</h2>
          <form className="form-floating">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="username" // 要跟 admin 一樣
                placeholder="name@example.com"
                value={formData.username}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="username">Email address</label>
              {/* 要跟 admin 一樣 */}
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                name="password" // 要跟 admin 一樣
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="password">Password</label> {/* 要跟 admin 一樣 */}
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              登入
            </button>
          </form>
        </div>
      ) : (
        <div className="container">已登入</div>
      )}
    </>
  );
}

export default App;
