import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [addedImages, setAddedImages] = useState([]); // Use plural for clarity
  const [currentImage, setCurrentImage] = useState(null); // For viewing images
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); // State for confirmation dialog
  const [imageToDeleteIndex, setImageToDeleteIndex] = useState(null); // Index of image to delete

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleSaveImage() {
    if (!image) return;

    setAddedImages([...addedImages, image]); // Use spread syntax for immutability
    setImage(null); // Clear preview after saving
  }

  function handleViewImage(img) {
    setCurrentImage(img);
  }

  const handleDeleteImage = (index) => {
    setImageToDeleteIndex(index); // Set index for confirmation dialog
    setShowConfirmDelete(true); // Show confirmation dialog
  };

  const handleConfirmDelete = () => {
    if (imageToDeleteIndex !== null) {
      const newImages = addedImages.filter((_, i) => i !== imageToDeleteIndex);
      setAddedImages(newImages);
      setImageToDeleteIndex(null); // Reset index after deletion
      setShowConfirmDelete(false); // Hide confirmation dialog
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false); // Hide confirmation dialog
    setImageToDeleteIndex(null); // Reset index if dialog is cancelled
  };

  return (
    <div className="galleryMainComponent">
      <div className="inputSection">
        <div className="sec1">
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleSaveImage}>Save Image</button>
        </div>
        <div className="sec2">
          <h5>Selected Image Preview</h5>
          {image && <img src={image} alt="Selected Image" />}
        </div>
      </div>

      {/* Output section */}
      <div className="outputSection">
        <div className="oSec1">
          <h1>Saved Images</h1>
          <div className="images">
            {addedImages.length > 0 ? (
              addedImages.map((savedImg, index) => (
                <div className="imageStyle" key={index}>
                  <img src={savedImg} alt={`Saved Image ${index + 1}`} />
                  <div className="buttons">
                    <span className='view' onClick={() => handleViewImage(savedImg)}>View Img</span>
                    <span className='cancel' onClick={() => handleDeleteImage(index)}>X</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No saved images yet.</p>
            )}
          </div>
        </div>
        <div className="oSec2">
          {/* View image functionality (optional) */}
          {currentImage && (
            <div className="seeImg">
              <img src={currentImage} alt="Enlarged Image" />
              <button onClick={() => setCurrentImage(null)}>Close</button>
            </div>
          )}

          {/* Confirmation dialog for deletion */}
          {showConfirmDelete && (
            <div className="confirm-delete-dialog">
              <p>Are you sure you want to delete this image?</p>
              <button className='green' onClick={handleConfirmDelete}>Yes</button>
              <button className='red' onClick={handleCancelDelete}>No</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;