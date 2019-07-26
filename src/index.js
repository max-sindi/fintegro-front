/*React, Material-ui Express, MongoDB + Mongoose ====
  Страница с двумя автокомплитами (данные в них из базы)
  (например марка и тип кузова или пиво и тара:))
  На основании автокомплита (например типа кузова)
  выдать одну из форм (пара любых инпутов в форме)
  (форм несколько для разных типов кузова)
  отправить запрос включающий данные с автокомплитов и текущей формы
  (один из автокомплитов - мультиселект и оба обязательны для заполнения)

  p.s. автокомплиты и подруженная форма должны находиться под друг другом
  (если автомкомлиты не заполнены, форма с низу от них не отображается)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AppContainer } from 'react-hot-loader';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
