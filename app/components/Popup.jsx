import { useState } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images to display in the slider
  const images = [
    '/path-to-image-1.png', // Replace with actual image paths
    '/path-to-image-2.png',
    '/path-to-image-3.png',
    '/path-to-image-4.png',
    '/path-to-image-5.png',
  ];

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      {/* Trigger link */}
      <button
        onClick={togglePopup}
        className="text-blue-600 hover:underline"
      >
        Where's the printer name?
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>

            {/* Title and Instructions */}
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-4">
                Find the product name
              </h2>
              <p className="mb-4">
                Find the product name on the front of the printer, on a label inside the printer, or on the packaging.
              </p>

              {/* Slider */}
              <div className="relative flex items-center justify-center">
                {/* Left arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 p-2 text-blue-600 hover:text-blue-800"
                >
                  &larr;
                </button>

                {/* Image */}
                <img
                  src={images[currentSlide]} // Current slide image
                  alt={`Printer ${currentSlide + 1}`}
                  className="w-48 h-48 object-cover mx-auto"
                />

                {/* Right arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 p-2 text-blue-600 hover:text-blue-800"
                >
                  &rarr;
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full mx-1 ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
