import Page from "./components/page";
import {useEffect, useRef, useState} from "react";
import mapboxgl from "mapbox-gl";
import styles from '../styles/Home.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const stores = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [14.267661355708938, 48.23495468568752]
            },
            'properties': {
                'id': '1',
                'name': 'ACL Traun',
                'address': 'Rubensstraße 5',
                'city': 'Traun',
                'postalCode': '4050'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [14.284407, 48.299171]
            },
            'properties': {
                'id': '2',
                'name': 'DOM GARAGE',
                'address': 'Stifterstraße 21',
                'city': 'Linz',
                'postalCode': '4020'
            }
        }
    ]
};

mapboxgl.accessToken = process.env.MAPBOX_KEY;

export default function Map() {
    const [pageIsMounted, setPageIsMounted] = useState(false);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(14.28611);
    const [lat, setLat] = useState(48.30639);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        setPageIsMounted(true)
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true
            })
        );
    });

    useEffect(() => {
        if (pageIsMounted && stores) {
            map.current.on('load', () => {
                map.current.addSource('places', {
                    'type': 'geojson',
                    'data': stores
                });
                buildLocationList(stores);
                addMarkers();
            });
        }

    });

    function addMarkers() {
        for (const marker of stores.features) {
            const el = document.createElement('div');
            el.id = `marker-${marker.properties.id}`;
            el.className = 'marker';

            new mapboxgl.Marker(el, {offset: [0, -23]})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map.current);
        }
    }

    function buildLocationList(stores) {
        for (const store of stores.features) {
            const listings = document.getElementById('listings');
            const listing = listings.appendChild(document.createElement('div'));
            listing.id = `listing-${store.properties.id}`;
            listing.className = 'item';

            const link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
            link.id = `link-${store.properties.id}`;
            link.innerHTML = `${store.properties.address}`;

            const details = listing.appendChild(document.createElement('div'));
            details.innerHTML = `${store.properties.name} | ${store.properties.city}`;

            listing.addEventListener('click', function () {
                for (const feature of stores.features) {
                    if (this.id === `listing-${feature.properties.id}`) {
                        flyToStore(feature);
                        createPopUp(feature);
                    }
                }
                const activeItem = document.getElementsByClassName('active');
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                this.parentNode.classList.add('active');
            });
        }
    }

    function flyToStore(currentFeature) {
        console.log(currentFeature.geometry.coordinates);
        map.current.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 18
        });
    }

    function createPopUp(currentFeature) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML(
                `<h3>${currentFeature.properties.name}</h3><h4>${currentFeature.properties.address}</h4><a href="#" class="mapAppLink">Show me the way!</a>`
            )
            .addTo(map.current);

        const link = popUps[0].getElementsByClassName('mapAppLink');

        link[0].addEventListener('click', function () {
            openMapsApp(currentFeature);
        });
    }

    function openMapsApp(currentFeature) {
        window.alert(navigator.platform)
        if ((navigator.platform.indexOf("iPhone") !== -1)
            || (navigator.platform.indexOf("MacIntel") !== -1)) {

            window.open("http://maps.apple.com/?daddr=" + currentFeature.geometry.coordinates[1] + "," + currentFeature.geometry.coordinates[0]);       //Apple Maps --> https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
        }
        else {
            window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + currentFeature.geometry.coordinates[1] + "," + currentFeature.geometry.coordinates[0]);
        }
    }


    return (
        <Page>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.sidebar}>
                        <div className='text-5xl uppercase' onClick={openMapsApp}>
                            <p>Our locations</p>
                        </div>
                        <div id='listings' className='listings'></div>
                    </div>
                    <div ref={mapContainer} id="map" className="relative h-screen w-screen mt-20"/>
                </main>
            </div>
        </Page>
    )
}