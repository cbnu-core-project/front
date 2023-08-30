import { useEffect, useState } from 'react';
import UserApplicationFormModal from '../components/clubsignup/UserApplicationFormModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {/* <UserApplicationFormModal /> */}
    </div>
  );
};

export default ModalProvider;
