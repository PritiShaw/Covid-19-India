import React from "react"
import { DeckGL, ScatterplotLayer, HeatmapLayer } from "deck.gl"
import { StaticMap } from "react-map-gl"
import stateData from "../data/stateStats"

export default class App extends React.Component {
  _renderTooltip () {
    const { hoveredObject, pointerX, pointerY } = this.state || {}
    return (
      hoveredObject && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            left: pointerX,
            top: pointerY,
          }}
        >
          {hoveredObject.message}
        </div>
      )
    )
  }

  render () {
    const layers = [
      new HeatmapLayer({
        id: "heatMapLayer",    
        data: stateData,
        getPosition: d => [d.long, d.lat],
        getWeight: d => d.death * 5 + d.confirmed * 2.5 - d.discharged * 1.5,
//         radiusMinPixels: 50,
        pickable: true,
        onClick: ({object,x,y}) =>
          console.log(object,x,y),
      }),
    ]

    return (
        <>
      <DeckGL
        initialViewState={{
          latitude: 22.2937,
          longitude: 78.9629,
          zoom: 4,
        }}
        height='100%'
        width='100%'
        layers={layers} // layer here
        controller={false} // allows the user to move the map around
      >
        <StaticMap
          mapStyle='mapbox://styles/mapbox/dark-v10'
          mapboxApiAccessToken='pk.eyJ1Ijoicm9oaXRjaGF0dG9wYWRoeWF5IiwiYSI6ImNrN3RmbDk3azB6MjEzZXJ2dGVzY210NjQifQ.dxswxL9KIL6vqVRXwHrtgg'
        />        
      </DeckGL>
      {/* {this._renderTooltip()} */}
    </>
    )
  }
}
