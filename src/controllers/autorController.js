import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontraddo = await autor.findById(id);
      res.status(200).json(autorEncontraddo);
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha na requisição do autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor criado com sucesso!", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastro autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorEncontraddo = await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha na atualização do autor` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      const autorEncontraddo = await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha ao excluir autor` });
    }
  }
}

export default AutorController;
