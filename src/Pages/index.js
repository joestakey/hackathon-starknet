import React, {useState} from 'react';
import Hero from '../Components/Hero';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Hero />
    </>
  );
}

export default Home