import React, { useState, useEffect } from 'react';
import s from './Home.module.css';

const Home = (props) => {
    const task = `Дана робота є продовженням попередньої

    1. Створити у склонованій директорії [React проект](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) з назвою 'traffic-lights-5'
    1. Перенести попередню лабораторну
    1. В папці src створити папку "Pages", а в ній компоненту "Home", на якій буде висвітлюватися завдання лабораторної роботи
    2. В цій же папці стоврити компоненту "ErrorPage" реалізувавши в ній кастомний вивід інформації про помилку
    1. Cтворити компоненту "Header", в якій реалізувати меню(меню має містити два пункти "Горизонтальний сфітлофор" та "Вертикальний світлофор")
    1. В App додати компоненту "Header"
    1.  Підключти бібліотеку "react-roter-dom"; в "App" реалізувати наступні роути
        js
        const router = createBrowserRouter([
              {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />
              },
                {
                path: "/horisontal",
                element: <... />,
                errorElement: <ErrorPage />
              },
                {
                path: "/vertikal",
                element: <... />,
                errorElement: <ErrorPage />
              },
            ]);
    
        
        * отримаєте незабутні враження, якщо  реалізуєте роути наступним чином
        js
        const router = createBrowserRouter([
              {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
                childrean: [
                {
                    path: ":direction",
                    element: <... />
                }
                    ]
              },
         ]);
        
    1. Оформити звіт на локальному комп'ютері
    1. Запушити лаборатону в github.classroom
    1. В Google classroom додати посилання на звіт`

    return (
        <div className={s.home_text}>
                <div className={s.task_title}>
                    Лабораторна робота №5
                </div>
             <div>
      <p>Дана робота є продовженням попередньої</p>
      <ol>
        <li>Створити у склонованій директорії <a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noopener noreferrer">React проект</a> з назвою 'traffic-lights-5'</li>
        <li>Перенести попередню лабораторну</li>
        <li>В папці src створити папку "Pages", а в ній компоненту "Home", на якій буде висвітлюватися завдання лабораторної роботи</li>
        <li>В цій же папці стоврити компоненту "ErrorPage" реалізувавши в ній кастомний вивід інформації про помилку</li>
        <li>Створити компоненту "Header", в якій реалізувати меню(меню має містити два пункти "Горизонтальний сфітлофор" та "Вертикальний світлофор")</li>
        <li>В App додати компоненту "Header"</li>
        <li>Підключити бібліотеку "react-roter-dom"; в "App" реалізувати наступні роути</li>
        <pre>
          <code>
            {`const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/horisontal",
    element: <... />,
    errorElement: <ErrorPage />
  },
  {
    path: "/vertikal",
    element: <... />,
    errorElement: <ErrorPage />
  },
]);`}
          </code>
        </pre>
        <p>Отримаєте незабутні враження, якщо реалізуєте роути наступним чином:</p>
        <pre>
          <code>
            {`const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":direction",
        element: <... />
      }M
    ]
  }
]);`}
          </code>
        </pre>
        <li>Оформити звіт на локальному комп'ютері</li>
        <li>Запушити лаборатону в github.classroom</li>
        <li>В Google classroom додати посилання на звіт</li>
      </ol>
    </div>
        </div>
    );
}

export default Home;