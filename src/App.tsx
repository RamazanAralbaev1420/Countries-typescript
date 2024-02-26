import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCountries } from './store/countries/country.action';
import { AppDispatch, RootState } from './store/store';
import { ICountries } from './tdata/Interface';
import { useAppSelector } from './store/hooks';
import { Card, Image, Input, Loader, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import SinglePage from './pages/SinglePage';
import { Link } from 'react-router-dom';
import { addSelect } from './store/countries/countrySlice';
import MyLoader from './MyLoader';
import ContentLoader from 'react-content-loader';

function App() {
  const { countries, isLoading } = useAppSelector((state) => state.countries);
  const [searchText, setSearchText] = useState('');
  const [selectValue, setSelectValue] = useState('All');
  const [loading, setLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries(selectValue));
  }, [selectValue]);
  console.log(selectValue);

  if (isLoading) {
    return <Loader className="load" color="blue" size="xl" />;
  }

  const setSearchHandle = (val: string) => {
    setSearchText(val);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <Input
            type="search"
            value={searchText}
            onChange={(e) => setSearchHandle(e.target.value)}
          />

          <Input
            component="select"
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            pointer
            // mt="md"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Europe">Europe</option>
            <option value="Ocean">Ocean</option>
          </Input>
        </div>
        <div className="countries_wrapper">
          {countries
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
            .map((country) => (
              <Card
                key={country.area + Math.random()}
                shadow="md"
                padding="xl"
                component="a"
                href=""
                target="_blank"
                className="card"
              >
                <Link to={country.cca3}>
                  <Card.Section className="cardImg">
                    <Image src={country.flags.png} h={220} alt="No way!" />
                  </Card.Section>

                  <Text fw={500} size="lg" mt="md">
                    <h3>{country.name.common}</h3>
                  </Text>

                  <Text mt="xs" c="dimmed" size="sm">
                    <p>{country.capital}</p>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                  </Text>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
