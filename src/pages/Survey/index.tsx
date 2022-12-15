import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Identity from './components/Identity';

interface Steps {
  [x: number]: React.ReactElement;
}

export default function Survey() {
  const { step } = useAppSelector((state: RootState) => state.survey);
  const steps: Steps = {
    1: <Identity />,
  };

  return steps[step];
}
