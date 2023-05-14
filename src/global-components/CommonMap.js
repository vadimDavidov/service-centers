import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
} from 'react-yandex-maps';
import Head from 'next/head';

function CommonMap() {
  const yandexApi = process.env.YANDEX_COMMON_API;
  const yandexGeoApi = process.env.YANDEX_GEOCODE_API_2;

  return (
    <>
      <Head>
        <script defer src={yandexApi} type="text/javascript" />
        <script defer src={yandexGeoApi} type="text/javascript" />
      </Head>

      <YMaps query={yandexApi}>
        <Map
          onError={() =>
            new Error('Sorry, something wrong with Yandex map loading!')
          }
          onLoad={ymaps => console.log(ymaps)}
          defaultState={{
            center: [55.755864, 37.617698],
            zoom: 5,
          }}
          width={800}
          height={400}
        >
          <ZoomControl />
          <FullscreenControl />
          <GeolocationControl options={{ float: 'left' }} />
        </Map>
      </YMaps>
    </>
  );
}

export default CommonMap;
