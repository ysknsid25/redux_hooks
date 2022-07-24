import React, { useState } from "react";
import axios from "../axios";

const Login = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /*
    // 認証ユーザを取得
    const getUser = () => {
        axios
            .get("/api/user")
            .then((res) => {
                console.log("[getUser]ログイン済み");
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log("[getUser]ログインしてません");
            });
    };

    // ブラウザリロード時にログイン済みか判定
    useEffect(() => {
        getUser();
    }, [getUser]);
*/
    // ログイン
    const login = async (e) => {
        e.preventDefault();
        // ログイン時にCSRFトークンを初期化
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios
                .post("/api/login", {
                    email,
                    password,
                })
                .then((res) => {
                    console.log(res.data);
                    if (res.data) {
                        console.log("[login]ログイン成功");
                        setUser(res.data.user);
                    } else {
                        console.log(res.data.message);
                        console.log("[login]ログイン失敗");
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                    console.log("[login]ログイン失敗");
                });
        });
    };

    // ログアウト
    const logout = () => {
        axios
            .post("/api/logout")
            .then((res) => {
                setUser(null);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getgoodmorning = () => {
        axios
            .get("/api/goodmorning")
            .then((res) => {
                setUser(null);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getgreet = () => {
        axios
            .get("/api/greet")
            .then((res) => {
                setUser(null);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // ログインフォーム
    let form = (
        <>
            <label>email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <button onClick={getgreet}>getgreet</button>
            <button onClick={getgoodmorning}>getgoodmorning</button>
        </>
    );

    // ユーザ情報
    let userInfo = null;
    // 認証済みの場合、ログアウトボタンとユーザ情報を表示
    if (user) {
        form = <button onClick={logout}>Logout</button>;
        userInfo = (
            <div>
                <h2>User</h2>
                <div>name: {user.name}</div>
                <div>email: {user.email}</div>
            </div>
        );
    }

    return (
        <div>
            {form}
            {userInfo}
        </div>
    );
};

export default Login;
