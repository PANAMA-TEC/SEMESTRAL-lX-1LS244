import './index.css'
import cookHub from './image.png';

const CookHubImage = ({width, height}) => {
  return(
    <div className="webLogo">
          <img className="image" width={width} height={height} src={cookHub} alt="" />
    </div>
  );
}

export { CookHubImage }
