import { ScatterplotLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude:  -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layer = new ScatterplotLayer({
    id: 'scatterplot-tree-layer',
    data: 'https://data.lacity.org/resource/6rrh-rzua.json?$limit=150000&$WHERE=location_1 IS NOT NULL',
    colorDomain: [0,50],
    getPosition: d => [+d.location_1.longitude, +d.location_1.latitude],
    colorRange: [   
      [196, 255, 255],
      [116, 255, 255],
      [72, 189, 150],  
      [0, 171, 152],
      [63, 141, 90],  
      [47, 142, 34]
    ],        
    elevationRange: [0, 300],
    elevationScale: 250,
    extruded: true,
    radius: 100,        
    opacity: 0.2,        
    upperPercentile: 50,
    coverage: 0.8
});

export const LosAngelesActiveBusinesses = {
    layer,
    initialViewState
};
