import './App.css';
import { faBars, faCircleQuestion, faChartColumn, faGear } from '@fortawesome/free-solid-svg-icons';
import IconButton from './components/IconButton';

function App() {
  return (
    <div className='header'>
      <div className='header-left'>
        <IconButton icon={faBars} />
        <IconButton icon={faCircleQuestion} />
      </div>
      <div className='header-center'>
        <span className='title'>Wordle</span>
      </div>
      <div className='header-right'>
        <IconButton icon={faChartColumn} />
        <IconButton icon={faGear} />
      </div>
    </div>
  );
}

export default App;
