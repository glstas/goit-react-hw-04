import { useEffect, useState } from "react";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImage } from "./Api/Api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [showedModal, setShowedModal] = useState(false);

  const handleSearch = async (q) => {
    if (!q) {
      q = query
    }
    try {
      setLoading(true);
      const response = await fetchImage(q, page);
      const { results, total_pages } = response || {};

      if (!results || results.length === 0) {
        toast.error("Something went wrong!");

        return;
      }

      setImages((prev) => [...prev, ...results]);
      setIsVisible(page < total_pages);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const onHandleSubmit = (q) => {
    if (!q) {
      return;
    }

    setQuery(q)
    setImages([]);
    setPage(1);
    setIsVisible(false);
    setError(null);
    handleSearch(q);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    handleSearch();
  };

  const openModal = (url, alt) => {
    // console.log(urls.regular, alt.alt_description);
    setShowedModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setShowedModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <div>
      <SearchBar onSearch={onHandleSubmit} />
      <Toaster />
      {error && <p> WoW!! - {error}</p>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      {isVisible && !loading && (
        <LoadMoreBtn onClick={loadMore}></LoadMoreBtn>
      )}
      {showedModal && <ImageModal
        modalIsOpen={showedModal}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />}
    </div>
  );
}

export default App;
