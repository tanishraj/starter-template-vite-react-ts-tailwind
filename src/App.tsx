import { HelloWorld } from '@/components/HelloWorld';
import ViteLogo from '@/assets/logo/vite.svg';
import ReactLogo from '@/assets/logo/react.svg';

export const App = () => {
  return (
    <div className='App'>
      <div className='flex-center'>
        <a href='https://vitejs.dev' target='_blank'>
          <ViteLogo />
        </a>
        <a href='https://vuejs.org/' target='_blank'>
          <ReactLogo />
        </a>
      </div>
      <HelloWorld msg='Vite + React' />
    </div>
  );
};
