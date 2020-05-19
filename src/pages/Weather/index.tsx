import React, { useEffect, useState, useContext } from 'react';
import Moment from 'react-moment';
import ReactLoading from 'react-loading';
import { ThemeContext } from 'styled-components';
import { TiWarningOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import api from '../../services/api';
import {
  Container,
  Content,
  CurrentDate,
  Location,
  Message,
  Temperature,
} from './styles';
import { Weathers } from '../../models/Weather';
import Button from '../../components/Button/index';

const Weather: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const [error, setError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [weathers, setWeathers] = useState<Weathers>();
  const [loading, setLoading] = useState<boolean>(false);
  const [units, setUnits] = useState<string>('metric');
  const unit = units === 'metric' ? 'ºC' : 'ºF';
  const date = new Date();

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setError(false);

        const getWeather = async () => {
          const response = await api.get('weather', {
            params: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              units,
            },
          });

          setWeathers(response.data);
          setLoading(false);
        };

        getWeather();
      },
      (error) => {
        setError(true);
        setLoading(false);
        setMessageError(error.message);
        toast.error(error.message);
      },
    );
  }, [units]);

  const handleUnit = () => {
    if (units === 'metric') {
      setUnits('imperial');
    } else {
      setUnits('metric');
    }
  };

  return (
    <Container error={error}>
      <Content>
        {loading && (
          <ReactLoading
            type="bubbles"
            color="#fff"
            height={'20%'}
            width={'20%'}
          />
        )}
        {error && (
          <div>
            <TiWarningOutline size={64} color={colors.light} />
            <Message>{messageError}</Message>
          </div>
        )}
        {weathers && !loading && (
          <div>
            <Temperature>
              {weathers.main.temp} {unit}
            </Temperature>
            <CurrentDate>
              <Moment format="dddd, DD MMMM YYYY">{date}</Moment>
            </CurrentDate>
            <Location>{weathers.name}</Location>
            <p>{weathers.weather[0].main}</p>
            <br></br>
            <br></br>
            <Button handleClick={handleUnit}>change unit</Button>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Weather;
