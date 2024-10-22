"use client";

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './ImagesMasked.module.css';

interface ImageMaskedProps {
  svgMask: { src: string };
  imageUrl: string | StaticImageData;
  aspectRatio: string; 
}

const ImageMasked: React.FC<ImageMaskedProps> = ({ svgMask, imageUrl, aspectRatio }) => {
  const [maskSrc] = useState<string | null>(svgMask.src);
  
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroImageMask} 
        style={{ 
          maskImage: `url(${maskSrc})`, 
          WebkitMaskImage: `url(${maskSrc})`,
          aspectRatio,
        }}>
        <Image src={imageUrl} alt="hero" fill/>
      </div>      
    </div>
  );
};

export default ImageMasked;