import React, { useState, useEffect } from "react";
import "./finance.css";

function Finance() {
  const [showPopup, setShowPopup] = useState(false);
  const [ano, setAno] = useState("2025");
  const [mes, setMes] = useState("Janeiro");
  const [acao, setAcao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("Entrada");
  const [acoes, setAcoes] = useState([]);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    calcularSaldo();
  }, [acoes]);

  const handleAnoChange = (e) => {
    setAno(e.target.value);
  };

  const handleMesChange = (e) => {
    setMes(e.target.value);
  };

  const handleAcaoChange = (e) => {
    setAcao(e.target.value);
  };

  const handleValorChange = (e) => {
    setValor(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaAcao = {
      ano,
      mes,
      acao,
      valor: parseFloat(valor),
      tipo,
    };
    setAcoes([...acoes, novaAcao]);
    setShowPopup(false);
    setAcao("");
    setValor("");
  };

  const calcularSaldo = () => {
    let total = 0;
    acoes.forEach((acao) => {
      if (acao.tipo === "Entrada") {
        total += acao.valor;
      } else if (acao.tipo === "Saída") {
        total -= acao.valor;
      }
    });
    setSaldo(total);
  };

  const handleDelete = (index) => {
    const novaListaAcoes = [...acoes];
    const acaoRemovida = novaListaAcoes.splice(index, 1)[0];

    setAcoes(novaListaAcoes);

    // Atualizar o saldo após a remoção do registro
    let novoSaldo = saldo;
    if (acaoRemovida.tipo === "Entrada") {
      novoSaldo -= acaoRemovida.valor;
    } else if (acaoRemovida.tipo === "Saída") {
      novoSaldo += acaoRemovida.valor;
    }
    setSaldo(novoSaldo);
  };

  return (
    <>
      <div id="paginaFinance">
        <div className="financeTitulo">
          <h1>Financeiro</h1>
        </div>
        <div className="img-text-container2">
          <div className="caixa">
            <label htmlFor="ano">Ano:</label>
            <select id="ano" value={ano} onChange={handleAnoChange}>
              {Array.from({ length: 11 }, (_, i) => 2020 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="caixa">
            <label htmlFor="mes">Mês:</label>
            <select id="mes" value={mes} onChange={handleMesChange}>
              {[
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="financeCorpo">
          <h2>{mes} - Ações:</h2>
          <ul>
            {acoes
              .filter((acao) => acao.mes === mes && acao.ano === ano)
              .map((acao, index) => (
                <li
                  key={index}
                  className={acao.tipo === "Entrada" ? "entrada" : "saida"}
                >
                  {acao.tipo}: {acao.acao} - R$ {acao.valor.toFixed(2)}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleDelete(index)}
                  >
                    <path
                      d="M42 4.66667V8H57.75C58.3467 8 58.919 8.21071 59.341 8.58579C59.7629 8.96086 60 9.46957 60 10C60 10.5304 59.7629 11.0391 59.341 11.4142C58.919 11.7893 58.3467 12 57.75 12H2.25C1.65326 12 1.08097 11.7893 0.659009 11.4142C0.237053 11.0391 0 10.5304 0 10C0 9.46957 0.237053 8.96086 0.659009 8.58579C1.08097 8.21071 1.65326 8 2.25 8H18V4.66667C18 2.09067 20.352 0 23.25 0H36.75C39.648 0 42 2.09067 42 4.66667ZM22.5 4.66667V8H37.5V4.66667C37.5 4.48986 37.421 4.32029 37.2803 4.19526C37.1397 4.07024 36.9489 4 36.75 4H23.25C23.0511 4 22.8603 4.07024 22.7197 4.19526C22.579 4.32029 22.5 4.48986 22.5 4.66667ZM8.991 16.4747C8.96535 16.2114 8.88124 15.9552 8.74355 15.721C8.60585 15.4867 8.41728 15.2791 8.18876 15.11C7.96023 14.9409 7.69627 14.8138 7.41214 14.7359C7.128 14.6581 6.82933 14.6311 6.53338 14.6564C6.23743 14.6818 5.95007 14.7591 5.68791 14.8838C5.42575 15.0084 5.19399 15.1781 5.00603 15.3829C4.81807 15.5876 4.67763 15.8235 4.59284 16.0768C4.50804 16.3301 4.48056 16.5959 4.512 16.8587L8.748 55.7867C8.8747 56.9405 9.48002 58.0111 10.4461 58.79C11.4121 59.5688 12.6698 60.0002 13.974 60H46.026C47.3307 60.0001 48.5887 59.5684 49.5548 58.789C50.521 58.0096 51.126 56.9383 51.252 55.784L55.491 16.8587C55.5483 16.3304 55.3671 15.8035 54.9874 15.3939C54.6076 14.9843 54.0604 14.7256 53.466 14.6747C52.8717 14.6237 52.2789 14.7848 51.8181 15.1223C51.3573 15.4599 51.0663 15.9464 51.009 16.4747L46.773 55.3973C46.7551 55.5624 46.6686 55.7156 46.5305 55.827C46.3924 55.9384 46.2125 56.0001 46.026 56H13.974C13.7875 56.0001 13.6076 55.9384 13.4695 55.827C13.3314 55.7156 13.2449 55.5624 13.227 55.3973L8.991 16.4747Z"
                      fill="black"
                    />
                  </svg>
                </li>
              ))}
          </ul>
          <h3>Saldo Atual: R$ {saldo.toFixed(2)}</h3>
          <div className="botao-container">
            <button className="botao" onClick={handleImageClick}>
              Adicionar Entrada/Saída
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleClosePopup}>
                &times;
              </span>
              <form onSubmit={handleSubmit}>
                <div className="caixa">
                  <label htmlFor="acao">Ação:</label>
                  <input
                    type="text"
                    id="acao"
                    value={acao}
                    onChange={handleAcaoChange}
                    required
                  />
                </div>
                <div className="caixa">
                  <label htmlFor="valor">Valor:</label>
                  <input
                    type="number"
                    step="0.01"
                    id="valor"
                    value={valor}
                    onChange={handleValorChange}
                    required
                  />
                </div>
                <div className="caixa">
                  <label htmlFor="tipo">Tipo:</label>
                  <select id="tipo" value={tipo} onChange={handleTipoChange}>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                  </select>
                </div>
                <button type="submit" className="botao">
                  Salvar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Finance;
