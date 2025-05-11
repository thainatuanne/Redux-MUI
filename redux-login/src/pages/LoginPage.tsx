import { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUsers } from "../store/modules/userSlice";
import type { User } from "../store/modules/userSlice";
import loginImage from "../assets/login-image.webp";

export function LoginPage() {
    const users = useSelector(selectUsers);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const userExists = users.find((u: User) => u.email === email && u.password === password);

        if (!userExists) {
            setError("Email ou senha inválidos");
            return;
        }

        alert("Login realizado com sucesso!");
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Box component="img" src={loginImage} alt="Imagem de login" sx={{ width: "50%", objectFit: "cover" }} />

            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ maxWidth: 400, width: "100%" }}>
                    <Typography variant="h4" mb={2} textAlign="center">Sign in</Typography>

                    <TextField fullWidth label="E-mail" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {error && <Typography color="error" mt={1}>{error}</Typography>}

                    <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>ENTRAR</Button>

                    <Typography variant="body2" align="center" mt={2}>
                        <Link href="/signup">Não tem uma conta? Cadastre-se</Link>
                    </Typography>

                    <Typography variant="caption" align="center" display="block" mt={2}>
                        Copyright © <Link href="https://yourwebsite.com">Your Website</Link> 2023.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
