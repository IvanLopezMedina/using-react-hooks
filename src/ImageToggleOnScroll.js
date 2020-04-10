import React, {useState, useRef, useEffect} from 'react';

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setInView(isInView);
    };

    window.addEventListener('scroll', scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [isLoading]);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  return isLoading ? null : (
    <>
      <img
        src={inView ? secondaryImage : primaryImage}
        alt=""
        ref={imageRef}
        width="200"
        height="200"
      />
    </>
  );
};

export default ImageToggleOnScroll;
