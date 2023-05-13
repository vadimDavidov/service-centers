import { useContext } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { CurrentCoordsContext } from '@/global-components/TopBar';

function YandexMap({ selectedCoords }) {
  const currentCoords = useContext(CurrentCoordsContext);
  const [coords] = currentCoords;
  const [optionCoords] = selectedCoords;

  return (
    <YMaps>
      <Map
        onLoad={ymaps => console.log(ymaps)}
        state={{
          center: !optionCoords ? [...coords] : [...optionCoords],
          zoom: 10,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
        width={540}
        height={333}
      >
        {/* <Placemark
          {...props}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          geometry={!optionCoords ? [...coords] : [...optionCoords]}
          properties={{
            balloonContentBody:
              'This is balloon loaded by the Yandex.Maps API module system',
          }}
        /> */}
      </Map>
    </YMaps>
  );
}

export default YandexMap;
