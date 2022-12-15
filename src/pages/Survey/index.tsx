import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Details from './components/Details';
import Identity from './components/Identity';

interface Steps {
  [x: number]: React.ReactElement;
}

export default function Survey() {
  const { step } = useAppSelector((state: RootState) => state.survey);
  const steps: Steps = {
    1: <Identity />,
    2: <Details />,
  };

  return steps[step];
}
