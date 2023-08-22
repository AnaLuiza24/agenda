import { Router } from "express";
import { listarAgenda, inserir, buscarNomes } from "../repository/agendaRepository.js";
import req from "express/lib/request.js";

let endpoints = Router();

endpoints.get('/contato', async (req, resp) =>{

    let dados = await listarAgenda();

    resp.send(dados);
})

endpoints.post('/contato', async (req, resp) => {
    let agenda = req.body;

    let dados = await inserir(agenda);

    resp.send(dados)
})

endpoints.get('/contato/busca?nome=', async (req, resp) => {
    let agenda = req.body;
    let dados = await buscarNomes(agenda);
    resp.send(dados);
})

export default endpoints;

