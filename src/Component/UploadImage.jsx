import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {

  const navigate=useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        // You can use FileReader to display the selected image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
  
        
      } else {
        setSelectedImage(null);
      }
    };
  
    return (
      <div>

        <h2> Upload any Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="imageInput"
        />
        <label htmlFor="imageInput">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          ) : (
            <div>
              <p>Click to choose a file</p>
            </div>
          )}
        </label>

        <div >
          <button className="bg-blue-200" onClick={()=>navigate('/')}> return To Home page</button>
        </div>
      </div>
    );
  };

export default UploadImage