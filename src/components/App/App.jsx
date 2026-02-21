import '@/App.css';
import {Section} from '@/components/Section/Section.jsx';
import planes from '@/json/planes.json';
import {PlanesList} from '@/components/PlanesList/PlanesList.jsx';

export function App() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};