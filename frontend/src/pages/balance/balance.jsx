import React, { useEffect, useState } from "react";
import "./balance.css";
import { useParams } from "react-router-dom";

const Balanco = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  useEffect(() => {
    fetch(`http://localhost:3000/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => setEvento(data))
      .catch((err) => console.error("Erro ao carregar evento", err));
  }, [id]);

  const handleAdicionarAcao = () => {
    fetch(`http://localhost:3000/eventos/${id}/adicionar-acao`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo, descricao, valor: parseFloat(valor) }),
    })
      .then((res) => res.json())
      .then((data) => setEvento(data))
      .catch((err) => console.error("Erro ao adicionar ação", err));
  };

  const calcularSaldo = () => {
    if (!evento || !evento.acoes) return 0;
    return evento.acoes.reduce((acc, acao) => {
      return acao.tipo === "entrada" ? acc + acao.valor : acc - acao.valor;
    }, 0);
  };

  return (
    <div className="balanco-container">
      <h1>Balanço do Evento</h1>
      {evento ? (
        <div>
          <h2>{evento.nome}</h2>
          <h3
            className={`saldo ${
              calcularSaldo() >= 0 ? "saldo-positivo" : "saldo-negativo"
            }`}
          >
            Saldo Atual: R$ {calcularSaldo().toFixed(2)}
          </h3>
          <ul className="acoes-lista">
            {evento.acoes.map((acao, index) => (
              <li key={index} className={acao.tipo}>
                <span>
                  {acao.tipo.toUpperCase()}: {acao.descricao} - R${" "}
                  {acao.valor.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="form-acao">
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
            <input
              type="text"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <input
              type="number"
              placeholder="Valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <button onClick={handleAdicionarAcao}>Adicionar</button>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Balanco;
