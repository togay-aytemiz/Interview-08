import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" }
  ]);

  const onSubmit = (e) => {
    // KODUNUZ BURAYA GELECEK
    e.preventDefault();
    const account = accounts.find(
      (account) => account.username === username && account.password === password);
    if (account) {
      setUsername("")
      setPassword("")
      alert(`Login başarılı, selam ${username}` );
    } else if (username.length >= 6 && password.length >= 6) {
      if (username.length > 20 || password.length > 20) {
        alert(`Username veya password, 20 karakterden uzun olamaz.`); 
        return
      } 
      setAccounts([...accounts, { username, password }]);
      setUsername("")
      setPassword("")
      alert(`Yeni hesap oluşturuldu! Selam, ${username}`);
    } else if (username.length < 6 || password.length < 6) {
      alert(`Username ve password, 6 karakterden uzun olmalıdır.`);
    } 
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10
      }}
      onSubmit={onSubmit}
    >
      <h3 className="my-2">Login</h3>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={/* KODUNUZ BURAYA GELECEK */ (e) => setUsername(e.target.value)}
        className="border border-gray-400 p-1 rounded-md"
        style={{ marginBottom: 5 }}
      />
      <input
        value={password}
        type="text"
        placeholder="password"

        onChange={/* KODUNUZ BURAYA GELECEK */ (e) => setPassword(e.target.value)}
        className="border border-gray-400 p-1 rounded-md"
        style={{ marginBottom: 10 }}
      />
      <button style={{ alignSelf: "center" }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default App;


