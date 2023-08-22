import conexao from "./connection.js";

export async function listarAgenda() {
    let sql = 'select * from tb_agenda';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function inserir(contato) {
    let sql = 'insert into tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro) values (?, ?, ?, ?, ?)';

    let resp = await conexao.query(sql, [contato.nome, contato.telefone, contato.email, contato.favorito, contato.cadastro]);
    let dados = resp[0];

    contato.id = dados.insertId;
    return contato;
}

export async function buscarNomes(nome) {
    let sql = 'select * from tb_agenda where nm_contato =' ;
    let resp = await conexao.query(sql, nome.nome);

    let dados = resp[0];

    nome.id = dados.insertId;
    return nome;
}
