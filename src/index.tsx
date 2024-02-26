import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
// import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App';
import SinglePage from './pages/SinglePage';
import MyLoader from './MyLoader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});
const Layout = lazy(() => import('./components/Layout'));
root.render(
  <div className="all">
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Layout />
                </Suspense>
              }
            >
              <Route path="" element={<App />} />
              <Route path=":cca3" element={<SinglePage />} />
              <Route path='skeleton' element={<MyLoader />} />
            </Route>
          </Routes>
        </Provider>
      </MantineProvider>
    </BrowserRouter>
  </div>
);
