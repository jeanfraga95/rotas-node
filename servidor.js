import express from "express";
const app = express();



const port = process.env.PORT || 3000;
app.use(express.json());





app.get("/",(req,res) => {
    res.send("Olá, mundo!");
});

app.get("/inicio/:nome",(req,res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}!`);
});

app.get("/inicio/:nome/:nivel",(req,res) => {
    const nome = req.params.nome;
    const nivel = req.params.nivel;
    res.send(`Olá, ${nome}! Seu nível é ${nivel}.`);
});


app.use((req,res) => {
    res.sendFile("C:\\Users\\jean.fsilva6\\Desktop\\rotas-node\\404.html");   
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});