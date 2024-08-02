 import React,{useState} from 'react'
import axios from 'axios'

 const Helperfunc = () =>{
    const [url, setUrl] = useState('');

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadSingleImage = async (base64) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/uploadImage', { image: base64 });
      setUrl(res.data.url); 
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadMultipleImages = async (images) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/uploadMultipleImages', { images });
      setUrl(res.data.url);
      alert('Images uploaded successfully');
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (let i = 0; i < files.length; i++) {
      const base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };
 }
  export default Helperfunc