module.exports = app => {
    const controller = app.controllers.cursos;
    
    //Selecionar e Inserir
    app.route('/api/cursos')
    .get(controller.listaCurso)
    .post(controller.salvaCurso);
}