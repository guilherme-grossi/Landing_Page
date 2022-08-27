const formularioController = {
    index: (request, response) => {
      response.render('formulario', { title: 'Express' });
    },
  }
  module.exports = formularioController