import React from 'react'
import './Gallery.css'
import GalleryImage from './GalleryImage/GalleryImage'
import Aziza from '../../../assets/gallery_photos/sample_photo.jpg'
import photo_1 from '../../../assets/gallery_photos/photo_1.jpg'
import photo_2 from '../../../assets/gallery_photos/photo_2.jpg'
import photo_3 from '../../../assets/gallery_photos/photo_3.jpg'
import photo_4 from '../../../assets/gallery_photos/photo_4.jpg'
import photo_5 from '../../../assets/gallery_photos/photo_5.jpg'
import photo_6 from '../../../assets/gallery_photos/photo_6.jpg'
import photo_7 from '../../../assets/gallery_photos/photo_7.jpg'
import photo_8 from '../../../assets/gallery_photos/photo_8.jpg'
import photo_9 from '../../../assets/gallery_photos/photo_9.jpg'
import photo_10 from '../../../assets/gallery_photos/photo_10.jpg'
import photo_11 from '../../../assets/gallery_photos/photo_11.jpg'
import photo_12 from '../../../assets/gallery_photos/photo_12.jpg'
import photo_13 from '../../../assets/gallery_photos/photo_13.jpg'
import File from './File/File'
const Gallery = () => {
  return(
    <div className="full-gallery">
      <div className="Gallery">
        <h1>Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="container">
        <div className="flex-item">
          <GalleryImage imageName="Aziza" imageURL={Aziza} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo1" imageURL={photo_1} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo2" imageURL={photo_2} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo3" imageURL={photo_3} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo4" imageURL={photo_4} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo5" imageURL={photo_5} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo6" imageURL={photo_6} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo7" imageURL={photo_7} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo8" imageURL={photo_8} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo9" imageURL={photo_9} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo10" imageURL={photo_10} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo11" imageURL={photo_11} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo12" imageURL={photo_12} /> 
        </div>
        <div className="flex-item">
          <GalleryImage imageName="photo13" imageURL={photo_13} /> 
        </div>
        <File />
        </div>
    </div>
  )
}
export default Gallery