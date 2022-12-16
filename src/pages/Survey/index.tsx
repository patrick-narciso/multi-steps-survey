import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Feedback from './components/FeedBack';
import Identity from './components/Identity';
import Summary from './components/Summary';

interface Steps {
  [x: number]: React.ReactElement;
}

export default function Survey() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isLoaded, setIsloaded] = useState<boolean>(false);
  const { step, isSubmitted } = useAppSelector(
    (state: RootState) => state.survey
  );

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    function handleLoad() {
      timerId = setTimeout(() => {
        setIsloaded((prev) => !prev);
      }, 2000);
    }
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timerId);
    };
  }, []);

  const steps: Steps = {
    1: <Identity />,
    2: <Details />,
    3: <Favorites />,
    4: <Summary />,
    5: <Feedback />,
  };

  if (!isLoaded || isSubmitted) return null;

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Survey</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{steps[step]}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
