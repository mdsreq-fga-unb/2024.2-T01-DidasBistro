import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Estoque.css";

const API_URL = "http://localhost:3000/api/produtos";

const Estoque = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add" ou "edit"
  const [editingProductId, setEditingProductId] = useState(null);
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: { nome: searchTerm },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const addOrUpdateProduct = async (e) => {
    e.preventDefault();
    if (!productName || !productQuantity || !productPrice || !productDescription || !productImageUrl) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const productData = {
        nome: productName,
        quantidade: Number(productQuantity),
        preco: Number(productPrice),
        descricao: productDescription,
        imagem: productImageUrl,
      };

      if (modalType === "edit" && editingProductId) {
        await axios.put(`${API_URL}/${editingProductId}`, productData);
      } else {
        await axios.post(API_URL, productData);
      }

      fetchProducts();
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Produto excluído com sucesso!");
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  const openModal = (type, product = null) => {
    setModalType(type);
    setIsModalOpen(true);

    if (type === "edit" && product) {
      setEditingProductId(product._id);
      setProductName(product.nome);
      setProductQuantity(product.quantidade);
      setProductPrice(product.preco);
      setProductDescription(product.descricao);
      setProductImageUrl(product.imagem);
    } else {
      resetForm();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProductId(null);
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setProductQuantity("");
    setProductPrice("");
    setProductDescription("");
    setProductImageUrl("");
  };

  return (
    <div className="estoque-layout">
      <Header />

      <div className="estoque-container">
        <aside className="sidebar">
          <h2 className="titulo_search">PRODUTOS</h2>
          <div className="search-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por nome..."
            />
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
              products.map((product) => (
                <div key={product._id} className="product-card">
                  {product.imagem && <img src={product.imagem} alt={product.nome} />}
                  <div className="product-info">
                    <h3>{product.nome}</h3>
                    <p>Quantidade: {product.quantidade}</p>
                    <p>Preço Unitário: R$ {product.preco.toFixed(2)}</p>
                    <p>Valor Total: R$ {(product.preco * product.quantidade).toFixed(2)}</p>
                    <p>{product.descricao}</p>
                    <button className="edit-button" onClick={() => openModal("edit", product)}>
                      Editar
                    </button>
                    <button className="delete-button" onClick={() => deleteProduct(product._id)}>
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum produto no estoque.</p>
            )}
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{modalType === "edit" ? "Editar Produto" : "Adicionar Produto"}</h2>
            <form onSubmit={addOrUpdateProduct}>
              <label>
                Nome do Produto:
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </label>
              <label>
                Quantidade:
                <input type="number" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
              </label>
              <label>
                Preço:
                <input type="number" step="0.01" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
              </label>
              <label>
                Descrição:
                <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
              </label>
              <label>
                URL da Imagem:
                <input type="text" value={productImageUrl} onChange={(e) => setProductImageUrl(e.target.value)} />
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
