import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Map from 'react-map-gl'
import DeckGL from '@deck.gl/react';
import { NewYorkTreesLayer } from '../layers'

const MAPBOX_TOKEN = 'pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsZWdyZDA4NTA1ZGwzeG53Y2c2OGY0bjAifQ._mbKMYj_moCfX1GcJmxAJg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Data visualization on Mapbox</title>
        <meta name="description" content="Data visualization on Mapbox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DeckGL 
          controller={{doubleClickZoom: false, touchRotate: true}}
          initialViewState={NewYorkTreesLayer.initialViewState}
          layers={[NewYorkTreesLayer.layer]}
        >
          <Map
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://sprites/mapbox/dark-v8"
            mapboxAccessToken={MAPBOX_TOKEN}
          />
        </DeckGL>
      </main>
    </>
  )
}
