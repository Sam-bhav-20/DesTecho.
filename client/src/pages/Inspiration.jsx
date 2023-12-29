import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from 'firebase/storage';
import { storage } from './firebase';
import { v4 } from 'uuid';
import './inspiration.css';
import Navbar from '../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root')
const Inspiration = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const imagesListRef = ref(storage, 'images/');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!localStorage.getItem('DesTecho-user')) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error, e.g., redirect to login page or display an error message
      }
    };
  
    fetchUser();
  }, [navigate]);
  const openModal = (url) => {
    setSelectedImageUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl(null);
    setModalIsOpen(false);
  };

  const handleDownload = () => {
    if (selectedImageUrl) {
      // Create an anchor element
      const link = document.createElement('a');

      // Set the href attribute to the image URL
      link.href = selectedImageUrl;

      // Set the download attribute to trigger download
      link.download = 'downloaded_image';

      // Append the anchor element to the document
      document.body.appendChild(link);

      // Trigger a click event on the anchor element
      link.click();

      // Remove the anchor element from the document
      document.body.removeChild(link);
    }
  }
  

  const uploadFile = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Clear existing URLs before fetching
        setImageUrls([]);
        const response = await listAll(imagesListRef);
        const urls = await Promise.all(
          response.items.map(async (item) => {
            return getDownloadURL(item);
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Chunk the image URLs into groups of 4
  const chunkedUrls = [];
  for (let i = 0; i < imageUrls.length; i += 4) {
    chunkedUrls.push(imageUrls.slice(i, i + 4));
  }

  return (

    <>
    <Navbar/>
      <div>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadFile}> Upload Image</button>
      </div>

      <div className='ins'>
        {chunkedUrls.map((chunk, rowIndex) => (
          <div key={rowIndex} className="row">
            {chunk.map((url, colIndex) => (
              <div key={colIndex} className="col">
                <img
                  src={url}
                  alt={`Uploaded Image ${rowIndex * 4 + colIndex}`}
                  className="img-fluid"
                  onClick={() => openModal(url)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        // className="modal-image"
      >
        
        {selectedImageUrl && (
          <img
            src={selectedImageUrl}
            alt="Zoomed Image"
            className="modal-image"
          />
        )}
        <div className='modal-buttons'>
            <button onClick={handleDownload} className="modal-button">
              Download
            </button>
            <button onClick={closeModal} className="modal-button">
              Close
            </button>
          </div>
      </Modal>
    </>
  );
};

export default Inspiration;
