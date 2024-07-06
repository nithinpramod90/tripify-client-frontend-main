import React from 'react'

const SelectedImage = ([selectedImage]) => {
  return (
    <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <motion.div
            className="max-w-3/4 max-h-3/4 overflow-hidden bg-white rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
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
  )
}

export default SelectedImage
