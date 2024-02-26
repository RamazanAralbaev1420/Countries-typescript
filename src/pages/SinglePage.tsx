import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ICountries } from '../tdata/Interface';
import { Button, Loader } from '@mantine/core';

const SinglePage = () => {
  const [data, setData] = useState<ICountries>();
  const { cca3 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${cca3}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [cca3]);
  console.log(data);

  if (!data) {
    return <Loader className='load' color="blue" size="xl" />;
  }

  const backPageHandler = () => {
    navigate('/');
  };

  const borderCountries = (border: string) => {
    navigate(`/${border}`);
  };

  return (
    <div>
      <div className="container">
        <div className="btnBack">
          <Button variant="light" onClick={backPageHandler}>
            back
          </Button>
        </div>
        <div className="singleCard">
          <div className="countryImage">
            <img src={data.flags.png} alt="" />
          </div>
          <div className="countryInfo">
            <div className="card_title">
              <h2>{data.name.common}</h2>
            </div>
            <div className="card-main-info">
              <div className="card-right-info">
                <p>
                  <span>Название: </span>
                  {data.name.common}
                </p>
                <p>
                  <span>Население: </span>
                  {data.population}
                </p>
                <p>
                  <span>Регион: </span>
                  {data.region}
                </p>
                <p>
                  <span>Субрегиог: </span>
                  {data.subregion}
                </p>
                <p>
                  <span>Столица: </span>
                  {data.capital}
                </p>
              </div>
              <div className="card-left-info">
                <p>
                  <span>Домен вернего уровня: </span>
                  {}
                </p>
                <p>
                  <span>Валюты: </span>
                  {data.subregion}
                </p>
                <p>
                  <span>Языки: </span>
                  {/* {data.languages} */}
                </p>
              </div>
            </div>
            <div className="border-countries">
              <h4>Пограничные страны: </h4>{' '}
              {data.borders ? (
                data.borders.map((border) => (
                  <Button
                    key={Date.now() + Math.random()}
                    variant="outline"
                    onClick={() => borderCountries(border)}
                  >
                    {border}
                  </Button>
                ))
              ) : (
                <h3>Нету пограничных стран</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
