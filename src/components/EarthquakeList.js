import React, { Component } from 'react';
import moment from 'moment';
import from earthquakes './data/earthquakes.js';

class EarthquakeList extends Component {
  render() {
    let earthquakes = earthquakes.features.map((earthquake) => {
    return (<div className="col-sm-6" key={earthquake.id}>
  <div className="card" >
    <div className="card-block">
      <h4 className="card-title">{earthquake.id.properties}</h4>
      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.mag}</h6>
      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(FILL_ME_IN_WITH_THE_TIME).format('llll')}</h6>
      <p className="card-text">Coordinates: {FILL_ME_IN_WITH_THE_COORDINATES}</p>

      <a href={FILL_ME_IN_WITH_THE_URL} className="card-link">USGS Event Link</a>

    </div>
  </div>
</div>)
})
  }
}
export default EathquakeList;
