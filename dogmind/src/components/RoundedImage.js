import Image from 'react-bootstrap/Image';
import '../assets/css/RoundedImage.css';


function RoundedImage({img}) {
  return (
    <div className="rounded-image-container">
      <Image src={img} rounded className="rounded-image" />
    </div>
  );
}

export default RoundedImage;
