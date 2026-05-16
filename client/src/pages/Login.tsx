import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        senha,
      }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border p-3 rounded-md mb-4"
        />

        <button
          type="submit"
          className="w-full bg-[#00786f] hover:bg-teal-800 text-white font-bold  py-3 rounded-md transition-all duration-200">
          Entrar
        </button>
      </form>
    </div>
  );
}