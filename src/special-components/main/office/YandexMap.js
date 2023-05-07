'use client';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

function YandexMap() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 10 }}
        width={540}
        height={336}
      >
        <Placemark geometry={[55.75, 37.57]} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;
