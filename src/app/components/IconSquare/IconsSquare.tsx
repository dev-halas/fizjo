import Image, { StaticImageData } from "next/image";

interface IconSquareProps {
  src: string | StaticImageData;
  alt?: string;
  iconConfig?: {
    iconSize?: string;
    squareSize?: string;
    borderRadius?: string;
    backgroundColor?: string;
  };
  className?: string;
}

const defaultConfig = {
  iconSize: '36px',
  squareSize: '80px',
  borderRadius: '16px',
  backgroundColor: '--light-orange',
};

const IconSquare: React.FC<IconSquareProps> = ({ 
  src, 
  alt = 'icon-square', 
  iconConfig = {},
  className = ''
}) => {
  const { iconSize, squareSize, borderRadius, backgroundColor } = {
    ...defaultConfig,
    ...iconConfig,
  };

  return (
    <div className={`iconSquare ${className}`} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${squareSize}`,
      aspectRatio: 1,
      borderRadius,
      backgroundColor: `var(${backgroundColor})`,
    }}>
      <Image src={src} alt={alt} style={{ width: iconSize, aspectRatio: 1 }}/>
    </div>
  );
};

export default IconSquare;