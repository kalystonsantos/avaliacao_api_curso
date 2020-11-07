const uuidv4 = require('uuid/v4');

module.exports =  app => {
    //cursosDB = "base de dados json"
    const cursosDB = app.data.cursos;
    const controller = {};

    const { cursos: cursosMock, } = cursosDB;

//como um metodo pra buscar no banco
controller.listaCurso = (req, res) => res.status(200).json(cursosDB);

controller.salvaCurso = (req, res) =>{
       cursosMock.data.push({
       id: uuidv4(),
       nome: req.body.nome,
       platform: req.body.platform,
       level: req.body.level
    });

    res.status(201).json(cursosMock);
}

return controller

}