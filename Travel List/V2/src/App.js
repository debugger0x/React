import { Form } from './Form';
import { Logo } from './Logo';
import { PackingBody } from './PackingBody';
import { Stats } from './Stats';
import './index.css';

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingBody />
      <Stats />
    </div>
  );
}
