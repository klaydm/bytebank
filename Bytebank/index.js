import {Cliente} from "./Cliente.js";
import{Gerente} from "./Funcionario/Gerente.js";
import{Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Heitor", 10000, 12345678910);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Kennedy", 6000, 11122233320);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Carmen",11223344556, "4321");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4321");


console.log(gerenteEstaLogado,diretorEstaLogado,clienteEstaLogado);