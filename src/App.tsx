import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCountries } from './store/countries/country.action';
import { AppDispatch } from './store/store';

function App() {
  interface RootState {
    isOn: boolean;
  }
  const selector = (state: RootState) => state.isOn;
  const isOn = useSelector(selector)
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  });
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
