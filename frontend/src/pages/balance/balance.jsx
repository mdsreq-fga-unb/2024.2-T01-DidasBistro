import React, { useEffect, useState } from "react";
import "./balance.css";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Balanco = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  useEffect(() => {
    fetch(`${API_URL}/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => setEvento(data))
      .catch((err) => console.error("Erro ao carregar evento", err));
  }, [id]);

  const handleAdicionarAcao = () => {
    fetch(`${API_URL}/eventos/${id}/adicionar-acao`, {
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

  const baixarRelatorio = async () => {
    try {
      const response = await fetch(
        `${API_URL}/eventos/relatorio/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao gerar relatório");
      }

      // Criar um Blob para armazenar o PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Criar um link para download
      const a = document.createElement("a");
      a.href = url;
      a.download = `relatorio_${evento.nome}.pdf`;
      document.body.appendChild(a);
      a.click();

      // Remover o link após o download
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar relatório:", error);
    }
  };

  const deletar_acao = async (id_acao) => {
    try {
      const response = await fetch(
        `${API_URL}/eventos/${id}/remover-acao/${id_acao}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao deletar ação");
      }

      const data = await response.json();
      setEvento(data);
    } catch (error) {
      console.error("Erro ao deletar ação:", error);
    }
  };

  console.log(evento);

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
                <button
                  className="botaoDelete"
                  onClick={() => deletar_acao(acao._id)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 4.66667V8H57.75C58.3467 8 58.919 8.21071 59.341 8.58579C59.7629 8.96086 60 9.46957 60 10C60 10.5304 59.7629 11.0391 59.341 11.4142C58.919 11.7893 58.3467 12 57.75 12H2.25C1.65326 12 1.08097 11.7893 0.659009 11.4142C0.237053 11.0391 0 10.5304 0 10C0 9.46957 0.237053 8.96086 0.659009 8.58579C1.08097 8.21071 1.65326 8 2.25 8H18V4.66667C18 2.09067 20.352 0 23.25 0H36.75C39.648 0 42 2.09067 42 4.66667ZM22.5 4.66667V8H37.5V4.66667C37.5 4.48986 37.421 4.32029 37.2803 4.19526C37.1397 4.07024 36.9489 4 36.75 4H23.25C23.0511 4 22.8603 4.07024 22.7197 4.19526C22.579 4.32029 22.5 4.48986 22.5 4.66667ZM8.991 16.4747C8.96535 16.2114 8.88124 15.9552 8.74355 15.721C8.60585 15.4867 8.41728 15.2791 8.18876 15.11C7.96023 14.9409 7.69627 14.8138 7.41214 14.7359C7.128 14.6581 6.82933 14.6311 6.53338 14.6564C6.23743 14.6818 5.95007 14.7591 5.68791 14.8838C5.42575 15.0084 5.19399 15.1781 5.00603 15.3829C4.81807 15.5876 4.67763 15.8235 4.59284 16.0768C4.50804 16.3301 4.48056 16.5959 4.512 16.8587L8.748 55.7867C8.8747 56.9405 9.48002 58.0111 10.4461 58.79C11.4121 59.5688 12.6698 60.0002 13.974 60H46.026C47.3307 60.0001 48.5887 59.5684 49.5548 58.789C50.521 58.0096 51.126 56.9383 51.252 55.784L55.491 16.8587C55.5483 16.3304 55.3671 15.8035 54.9874 15.3939C54.6076 14.9843 54.0604 14.7256 53.466 14.6747C52.8717 14.6237 52.2789 14.7848 51.8181 15.1223C51.3573 15.4599 51.0663 15.9464 51.009 16.4747L46.773 55.3973C46.7551 55.5624 46.6686 55.7156 46.5305 55.827C46.3924 55.9384 46.2125 56.0001 46.026 56H13.974C13.7875 56.0001 13.6076 55.9384 13.4695 55.827C13.3314 55.7156 13.2449 55.5624 13.227 55.3973L8.991 16.4747Z"
                      fill="white"
                    />
                  </svg>
                </button>
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
            <button onClick={baixarRelatorio}>Gerar Relatório</button>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Balanco;
