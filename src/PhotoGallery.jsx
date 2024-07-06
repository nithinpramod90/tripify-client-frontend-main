import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import WavyText from './magicui/WavyText';
import api from './Axios';
import Navigator from './Navigator';
import { useNavigate } from 'react-router-dom';

const PhotoGallery = () => {

  const [ImageData, setImageData] = useState([])
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetchPhotos()
  }, [])

  const getPhotoColumns = (photos, numCols) => {
    const columns = Array.from({ length: numCols }, () => []);
    photos.forEach((photo, index) => {
      columns[index % numCols].push(photo);
    });
    return columns;
  };

  const fetchPhotos = async () => {
    try {
      const response = await api.get('/photos');
      if (response.status === 200) {
        setImageData(response.data)
      }
    } catch (error) {
      console.log(`error on fetchPhotos: ${error}`);
    }
  }


  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const columns = getPhotoColumns(ImageData, 4);
  
  return (
    <div className=" mx-auto p-4 bg-white">
      <div
                className="cursor-pointer absolute top-0 left-0 px-10 py-5 "
                onClick={() => navigate('/')}
            >
                <img
                    src="/TRIP999Artboard 1@4x (1).png"
                    alt="TRIPIFYME Logo"
                    className="md:w-20 w-12"
                />
                <p className='md:text-sm font-bold py-2 text-xs'>By QATAYWORLD PVT LTD</p>
            </div>
                           <Navigator text={'text-black'} icone={'text-black'} bg={'bg-white/30'}/>
      <WavyText
        word="Travel Gallery"
        className="text-4xl font-bold text-black mb-10"
      />
      <div className="md:flex gap-5">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="h-fit space-y-5">
            {col.map((photo, photoIndex) => (
              <motion.div
                key={photoIndex}
                className="relative overflow-hidden rounded-lg shadow-lg h-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => openModal(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  {photo.caption}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <motion.div
            className="max-w-3/4 md:max-w-3xl max-h-3/4 md:max-h-3/4 overflow-hidden bg-white rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside the modal
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="object-contain w-full h-full"
            />
            <div className="absolute top-0 right-0 p-2">
              <button
                className="text-white bg-black rounded-full p-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default PhotoGallery;
