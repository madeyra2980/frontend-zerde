import React, { useState } from "react";

const SignInModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Пожалуйста, введите корректный email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      

      if (!response.ok) {
        throw new Error("Ошибка при входе. Проверьте данные.");
      }

      const data = await response.json();
      console.log("Успешный вход:", data);
      localStorage.setItem("token", data.token);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-in-modal">
      <h2>Вход в личный кабинет</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignInModal;