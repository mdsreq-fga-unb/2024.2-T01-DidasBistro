import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Estoque.css";

const Estoque = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add" ou "remove"
  const [productImage, setProductImage] = useState(null); // Estado para armazenar a imagem do produto
  const [productName, setProductName] = useState(""); // Nome do produto
  const [productQuantity, setProductQuantity] = useState(""); // Quantidade do produto
  const [products, setProducts] = useState([]); // Lista de produtos

  // Recupera os produtos do sessionStorage quando o componente é carregado
  useEffect(() => {
    const storedProducts = sessionStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts)); // Converte para array novamente
    }
  }, []);

  // Função para adicionar o produto
  const addProduct = (e) => {
    e.preventDefault();
    if (!productName || !productQuantity || !productImage) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    const newProduct = { name: productName, quantity: productQuantity, image: productImage };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    sessionStorage.setItem("products", JSON.stringify(updatedProducts)); // Armazena os produtos no sessionStorage
    closeModal(); // Fecha o modal após adicionar
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
    setProductImage(null); // Limpa a imagem
    setProductName(""); // Limpa o nome
    setProductQuantity(""); // Limpa a quantidade
  };

  // Função para lidar com o upload da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result); // Armazena a URL da imagem
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL base64
    }
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
          <div className="button-container">
            <button className="action-button" onClick={() => openModal("add")}>
              Adicionar produtos ao estoque
            </button>
            <button className="action-button" onClick={() => openModal("remove")}>
              Remover produtos do estoque
            </button>
          </div>

          {/* Exibição dos Produtos */}
          <div className="product-cards">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="product-card">
                  {product.image && <img src={product.image} alt={product.name} />}
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>Quantidade: {product.quantity}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum produto no estoque.</p>
            )}
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && modalType === "add" && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Adicionar Produto</h2>
            <form onSubmit={addProduct}>
              <label>
                Nome do Produto:
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Ex: Coca-cola lata 300ml"
                />
              </label>
              <label>
                Quantidade:
                <input
                  type="number"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  placeholder="Ex: 10"
                />
              </label>
              <label>
                Imagem do Produto:
                <input type="file" accept="image/*" onChange={handleImageChange} />
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

      {/* Modal para Remover Produto - ainda sem funcionalidade */}
      {isModalOpen && modalType === "remove" && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Remover Produto</h2>
            <p>Funcionalidade em desenvolvimento.</p>
            <div className="modal-buttons">
              <button type="button" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Estoque;
