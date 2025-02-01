import React, { useState, useEffect } from "react";
import axios from "axios"; // Importando axios
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Estoque.css";

const API_URL = "http://localhost:3000/api/produtos"; // URL da API

const Estoque = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add" ou "remove"
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState([]); // Lista de produtos

  // Função para buscar os produtos na API ao carregar a página
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data); // Atualiza a lista com os produtos da API
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  // Função para adicionar um produto
  const addProduct = async (e) => {
    e.preventDefault();
    if (!productName || !productQuantity || !productPrice || !productDescription || !productImage) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const newProduct = {
        nome: productName,
        quantidade: Number(productQuantity),
        preco: Number(productPrice),
        descricao: productDescription,
        imagem: productImage,
      };

      await axios.post(API_URL, newProduct); // Envia o produto para a API
      fetchProducts(); // Atualiza a lista de produtos
      closeModal(); // Fecha o modal
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  };

  // Função para lidar com o upload da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result); // Armazena a URL da imagem em base64
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
    setProductImage(null);
    setProductName("");
    setProductQuantity("");
    setProductPrice("");
    setProductDescription("");
  };

  return (
    <div className="estoque-layout">
      <Header />

      <div className="estoque-container">
        <aside className="sidebar">
          <h2>PRODUTOS</h2>
          <div className="search-container">
            <input type="text" placeholder="Pesquisar..." />
            <button>🔍</button>
          </div>
        </aside>

        <main className="main-content">
          <div className="button-container">
            <button className="action-button" onClick={() => openModal("add")}>
              Adicionar produtos ao estoque
            </button>
          </div>

          <div className="product-cards">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="product-card">
                  {product.imagem && <img src={product.imagem} alt={product.nome} />}
                  <div className="product-info">
                    <h3>{product.nome}</h3>
                    <p>Quantidade: {product.quantidade}</p>
                    <p>Preço: R$ {product.preco.toFixed(2)}</p>
                    <p>{product.descricao}</p>
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
                Preço:
                <input
                  type="number"
                  step="0.01"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="Ex: 10.50"
                />
              </label>
              <label>
                Descrição:
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="Ex: Refrigerante de cola"
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

      <Footer />
    </div>
  );
};

export default Estoque;
