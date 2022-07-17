//Aqui estou criando um servidor para me comunicar em outra maquiana

console.log("Ola mundo!!");
const express = require('express'); //Colocando o express em uma variavel

const app = express(); // executando a biblioteca express
const port = 8000;  // local disponivel para entrada de dados

const router = require ("./router");

app.use(router);

app.use(express.json()); // Indicar para express para usar o json

//+++++++++++++++ Criar alguns usuario falsos e colocalos em um array +++++++++++++++

// let usuario1 ={
//     nome: "João",
//     sobreme:"Silva",
//     corFavorita:"Azul"
// }

// let usuario2 ={
//     nome: "Joana",
//     sobreme:"Silva",
//     corFavorita:"Verde"
// }

// let usuario3 ={
//     nome: "Jaques",
//     sobreme:"Puxar",
//     corFavorita:"Amarelo"
// }
// const todosUsuarios =[usuario1,usuario2,usuario3]

// app.get("/",(requisicao,resposta)=>{ //Get preica de URL , + requisiçção e o que vou responder

//     resposta.status(200).send("Você está no site correto");
// })

// app.get("/usuarios",(requisicao,resposta)=>{

// resposta.status(200).send(todosUsuarios);
// })

// app.get("/usuarios/:id",(requisicao,resposta)=>{

// const idUsuario = requisicao.params.id;
// resposta.status(200).send(todosUsuarios[idUsuario]);
// })


// app.post("/criarUsuario",(requisicao,resposta)=>{

//     const novoUsuario = requisicao.body;

//     todosUsuarios.push(novoUsuario);
//     resposta.status(201).send(todosUsuarios);

// })

// app.put("/modificarUsuario/:id",(requisicao,resposta)=>{
//     const idUsuario = requisicao.params.id;
//     const velhoUsuario = todosUsuarios[idUsuario];
//     const novoUsuario = requisicao.body;
//     todosUsuarios[idUsuario]={...velhoUsuario,...novoUsuario}
//     resposta.status(200).send( todosUsuarios[idUsuario]);
// })

// app.delete("/deletarUsuario/:id",(requisicao,resposta)=>{
//     const idUsuario = requisicao.params.id;
//     const usuarioDeletado = todosUsuarios[idUsuario];
//     todosUsuarios[idUsuario] = requisicao.body;
    
//     resposta.status(200).send(`Usuario deletado: ${usuarioDeletado.nome}`)

// })



app.listen(port,()=>{
    console.log(`O servidor está disponivel em http://localhost:${port}`)
})