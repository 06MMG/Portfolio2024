// components/ImageContainer.tsx
import Image, { StaticImageData } from 'next/image';

interface ImageContainerProps {
  src: StaticImageData;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt }) => {
  return (
    <div className='relative w-full h-full'>
      <Image
        src={src}
        alt={alt}
        layout='fill'  // Make the image fill the container
        objectFit='cover'  // Ensure the image covers the container
        className='rounded-lg'
      />
    </div>
  );
};

export default ImageContainer;
