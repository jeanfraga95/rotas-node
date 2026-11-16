import express from "express";
const app = express();



const port = process.env.PORT || 3000;
app.use(express.json());





app.get("/",(req,res) => {
    res.send("Olá, mundo!");
});






app.use((req,res) => {
    res.sendFile("C:\\Users\\jean.fsilva6\\Desktop\\rotas-node\\404.html");   
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});