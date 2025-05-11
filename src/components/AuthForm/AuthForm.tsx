import { TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

type Props = { isRegister: boolean };

export default function AuthForm({ isRegister }: Props) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = isRegister
      ? 'https://airservice-production.up.railway.app/auth/register'
      : 'https://airservice-production.up.railway.app/auth/login';

    // Prepare body based on registration/login
    const body = new URLSearchParams();
    body.append('username', form.username);
    body.append('password', form.password);

    if (isRegister) {
      body.append('email', form.email);
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Auth failed");

      login(data.access_token);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} mt={3}>
        <TextField 
          label="Username" 
          name="username" 
          onChange={handleChange} 
          value={form.username}
          required
        />
        {isRegister && (
          <TextField 
            label="Email" 
            name="email" 
            onChange={handleChange} 
            value={form.email}
            required
          />
        )}
        <TextField 
          label="Password" 
          name="password" 
          type="password" 
          onChange={handleChange} 
          value={form.password}
          required
        />
        <Button type="submit" variant="contained">
          {isRegister ? "Register" : "Login"}
        </Button>
      </Stack>
    </form>
  );
}
