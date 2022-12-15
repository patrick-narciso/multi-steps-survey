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
  const { step } = useAppSelector((state: RootState) => state.survey);
  const steps: Steps = {
    1: <Identity />,
    2: <Details />,
    3: <Favorites />,
    4: <Summary />,
    5: <Feedback />,
  };

  return steps[step];
}
