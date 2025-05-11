import { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/modules/userSlice";
import signUpImage from "../assets/signup-image.jpg"; // ajuste conforme o nome real da sua imagem

export function SignUpPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validate = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$/;
        if (!emailPattern.test(email) || email.indexOf("@") < 3) {
            return "Email inválido";
        }
        if (password.length <= 4 || /^(.)\1+$/.test(password)) {
            return "Senha inválida";
        }
        if (password !== confirmPassword) {
            return "As senhas não coincidem";
        }
        return "";
    };

    const handleSubmit = () => {
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }
        dispatch(registerUser({ email, password }));
        alert("Cadastro realizado com sucesso!");
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* Imagem do lado esquerdo */}
            <Box
                component="img"
                src={signUpImage}
                alt="Imagem de cadastro"
                sx={{ width: "50%", objectFit: "cover" }}
            />

            {/* Formulário do lado direito */}
            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ maxWidth: 400, width: "100%" }}>
                    <Typography variant="h4" mb={2} textAlign="center">
                        Sign Up
                    </Typography>

                    <TextField
                        fullWidth
                        label="E-mail"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        label="Confirmar Senha"
                        type="password"
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {error && (
                        <Typography color="error" mt={1}>
                            {error}
                        </Typography>
                    )}

                    <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                        Criar Conta
                    </Button>

                    <Typography variant="body2" align="center" mt={2}>
                        <Link href="/login">Já possui conta? Vá para Login</Link>
                    </Typography>

                    <Typography variant="caption" align="center" display="block" mt={2}>
                        Copyright © <Link href="https://yourwebsite.com">Your Website</Link> 2023.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
