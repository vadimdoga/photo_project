import React from "react";
import "./GalleryImage.css";
class GalleryImage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      display: false,
      imageClick: false
    };
  }
  handleImage = () => {
    this.setState({
      display: true,
      imageClick: true
    });

    // let modalImg = document.getElementById("img01") 
    // modalImg.src = this.props.imageURL
  };
  handleClose = () => {
    this.setState({
      display: false
    });
  };
  render(props) {
    return (
      <div>
        <div className="GalleryImage">
          <img
            onClick={this.handleImage}
            src={this.props.imageURL}
            alt={this.props.imageName}
          />
        </div>
        <div
          className="Modal"
          style={
            this.state.display ? { display: "block" } : { display: "none" }   
          }
        >
          <span onClick={this.handleClose} className="close">
            &times;
          </span>
          <img className="modal-content" id="img01" alt={this.props.imageName} src={
            this.state.imageClick ? (this.props.imageURL):(null)
          }></img>
          <div className="caption">{this.props.imageName}</div>
        </div>
      </div>
    );
  }
}
export default GalleryImage;
