import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import UserForm from './components/UserForm';
import Steps from './components/Steps';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

import { useState } from 'react';
import { useform } from './hooks/useForm';

import './App.css';

type formFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: formFields = {
  name: '',
  email: '',
  review: '',
  comment: '',
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHanlder = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHAndler={updateFieldHanlder} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHanlder} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useform(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
