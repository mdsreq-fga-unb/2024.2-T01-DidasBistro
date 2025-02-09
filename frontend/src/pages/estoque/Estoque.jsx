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
    if (!productName || !productQuantity || !productPrice || !productDescription) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const productData = {
        nome: productName,
        quantidade: Number(productQuantity),
        preco: Number(productPrice),
        descricao: productDescription,
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
                  <div className="product-info">
                    <h3>{product.nome}</h3>
                    <p>Quantidade: {product.quantidade}</p>
                    <p>Preço Unitário: R$ {product.preco.toFixed(2)}</p>
                    <p>Valor Total: R$ {(product.preco * product.quantidade).toFixed(2)}</p>
                    <p>{product.descricao}</p>
                    <button className="edit-button" onClick={() => openModal("edit", product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path fill="white" d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
                    </svg>
                    </button>
                    <button className="delete-button" onClick={() => deleteProduct(product._id)}>
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
