const userController ={}

let usuario1 ={
    nome: "João",
    sobreme:"Silva",
    corFavorita:"Azul"
}

let usuario2 ={
    nome: "Joana",
    sobreme:"Silva",
    corFavorita:"Verde"
}

let usuario3 ={
    nome: "Jaques",
    sobreme:"Puxar",
    corFavorita:"Amarelo"
}
const todosUsuarios = {}

userController.mostrarTodosUsuarios =(requisicao, resposta)=>{
    resposta.status(200).send(todosUsuarios);
}

userController.adicionarNovoUsuario =(requisicao,resposta)=>{
    
    const idUsuario = requisicao.params.id;
    const novoUsuario = requisicao.body;

    todosUsuarios[ID] = idUsuario;
    resposta.send(todosUsuarios);


    // let usuario2 ={
    //     nome: "Joana",
    //     sobreme:"Silva",
    //     corFavorita:"Verde"
    // }
}



module.exports = userController;