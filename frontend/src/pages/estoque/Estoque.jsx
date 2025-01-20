import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Estoque.css";
import { useNavigate } from "react-router-dom";


const Estoque = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add" ou "remove"

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  return (
    <div className="estoque-layout">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="estoque-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>PRODUTOS</h2>
          <div className="search-container">
            <input type="text" placeholder="Pesquisar..." />
            <button>🔍</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
        <div className="main-content">
  <div className="button-container">
    <button className="action-button" onClick={() => openModal("add")}>
      Adicionar produtos ao estoque
    </button>
    <button className="action-button" onClick={() => openModal("remove")}>
      Remover produtos do estoque
    </button>
  </div>
</div>


          {/* Placeholder for Product List */}
          
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{modalType === "add" ? "Adicionar Produto" : "Remover Produto"}</h2>
            <form>
              <label>
                Nome do Produto:
                <input type="text" placeholder="Ex: Coca-cola lata 300ml" />
              </label>
              <label>
                Quantidade:
                <input type="number" placeholder="Ex: 10" />
              </label>
              <div className="modal-buttons">
                <button type="submit">Confirmar</button>
                <button type="button" onClick={closeModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Estoque;