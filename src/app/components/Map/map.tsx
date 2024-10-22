"use client";

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './map.module.css';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY as string,
        version: 'weekly',
        libraries: ['marker'],
      });

      const googleMaps = await loader.load();

      const position = {
        lat: 53.0412019537362,
        lng: 18.584714898782707,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [
              { saturation: -100 },
              { gamma: 0.5 },
            ]
          }
        ],
      };

      const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new google.maps.Marker({
        position,
        map,
        title: 'Mój gabinet',
        icon: {
          url: "/images/mapMarker.svg",
          scaledSize: new google.maps.Size(64, 64),
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: '<div style="text-align: center; min-width: 220px"><h3>Marek Bober</h3><p>Fizjoterapia Toruń</p><p>ul. Kościuszki 9/11</p></div>',
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    initMap();
  }, []);

  return (
    <div ref={mapRef} id="map" className={styles.map} />
  );
};

export default Map;
