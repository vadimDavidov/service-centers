import { useContext } from 'react';
import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  Placemark,
  GeolocationControl,
  SearchControl,
} from 'react-yandex-maps';
import { CurrentCoordsContext } from '@/global-components/TopBar';
import Head from 'next/head';

function YandexMap({ setCityName, setCityCoords }) {
  const yandexCommonApi = process.env.YANDEX_COMMON_API_KEY;
  const yandexGeocodeApi = process.env.YANDEX_GEOCODE_API_KEY;
  const yandexCommonUrl = process.env.YANDEX_COMMON_URL;
  const yandexGeocodeUrl = process.env.YANDEX_GEOCODE_URL;
  const currentCoords = useContext(CurrentCoordsContext);
  const [coords] = currentCoords;
  const [optionCoords] = setCityCoords;

  console.log(setCityName);
  console.log(setCityCoords);

  return (
    <>
      <Head>
        <script defer src={yandexCommonUrl} type="text/javascript" />
        <script
          defer
          src={`${yandexGeocodeUrl}${setCityName}`}
          type="text/javascript"
        />
      </Head>

      <YMaps query={{ apikey: yandexCommonApi }}>
        <Map
          onError={() =>
            new Error('Sorry, something wrong with Yandex map loading!')
          }
          onLoad={ymaps => console.log(ymaps)}
          defaultState={{
            center: [55.755864, 37.617698],
            zoom: 5,
          }}
          state={{
            center: !optionCoords ? [...coords] : [...optionCoords],
            zoom: 10,
          }}
          width={540}
          height={333}
        >
          <ZoomControl />
          <FullscreenControl />
          <Placemark
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            geometry={!optionCoords ? [...coords] : [...optionCoords]}
            properties={{
              balloonContentBody:
                'This is balloon loaded by the Yandex.Maps API module system',
            }}
          />
          <GeolocationControl options={{ float: 'left' }} />
          <SearchControl options={{ float: 'right' }} />
        </Map>
      </YMaps>
    </>
  );
}

export default YandexMap;
