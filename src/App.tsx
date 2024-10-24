import { HelloWorld } from '@/components/HelloWorld';
import ViteLogo from '@/assets/logo/vite.svg';
import ReactLogo from '@/assets/logo/react.svg';
import './App.scss';

export const App = () => {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <ViteLogo />
          {/* <img src={ViteLogo} className='logo' alt='Vite logo' /> */}
        </a>
        <a href='https://vuejs.org/' target='_blank'>
          <ReactLogo />
          {/* <img src={reactLogo} className='logo vue' alt='Vue logo' /> */}
        </a>
      </div>
      <HelloWorld msg='Vite + React' />
    </div>
  );
};
