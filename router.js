const express = require("express")

const router = express.Router();

const userController = require("./controller/userController")

router.use(express.json());

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

router.get("/",(requisicao,resposta)=>{ //Get preica de URL , + requisiçção e o que vou responder

    resposta.status(200).send("Você está no site correto");
})

router.get("/usuarios",userController.mostrarTodosUsuarios)

router.post("/usuario/:id",userController.adicionarNovoUsuario)


// router.get("/usuarios/:id",(requisicao,resposta)=>{

// const idUsuario = requisicao.params.id;
// resposta.status(200).send(todosUsuarios[idUsuario]);
// })


// router.post("/criarUsuario",(requisicao,resposta)=>{

//     const novoUsuario = requisicao.body;

//     todosUsuarios.push(novoUsuario);
//     resposta.status(201).send(todosUsuarios);

// })

// router.put("/modificarUsuario/:id",(requisicao,resposta)=>{
//     const idUsuario = requisicao.params.id;
//     const velhoUsuario = todosUsuarios[idUsuario];
//     const novoUsuario = requisicao.body;
//     todosUsuarios[idUsuario]={...velhoUsuario,...novoUsuario}
//     resposta.status(200).send( todosUsuarios[idUsuario]);
// })

// router.delete("/deletarUsuario/:id",(requisicao,resposta)=>{
//     const idUsuario = requisicao.params.id;
//     const usuarioDeletado = todosUsuarios[idUsuario];
//     todosUsuarios[idUsuario] = requisicao.body;
    
//     resposta.status(200).send(`Usuario deletado: ${usuarioDeletado.nome}`)

// })


module.exports = router;
