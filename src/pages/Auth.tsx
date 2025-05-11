import { useParams } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import AuthForm from "../components/AuthForm/AuthForm";

export default function AuthPage() {
  const { mode } = useParams();
  const currentMode = mode === "register" ? "register" : "login";

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" textAlign="center" mt={5}>
        {currentMode === "login" ? "Login" : "Register"}
      </Typography>
      <AuthForm isRegister={currentMode === "register"} />
    </Container>
  );
}
