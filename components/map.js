import mapboxDirections from '@mapbox/mapbox-sdk/services/directions';

import {
  MAPBOX_ACCESS_TOKEN,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
  FOURSQUARE_API_URL
} from './config';

const directionsClient = mapboxDirections({ accessToken: MAPBOX_ACCESS_TOKEN });

// https://developer.foursquare.com/docs/api/venues/search
// https://developer.foursquare.com/docs/resources/categories
// Foursquare category ids:
// Bar: 4bf58dd8d48988d116941735
// Whisky bar: 4bf58dd8d48988d122941735
export const fetchVenues = ({ latitude, longitude }) => {
  const params = {
    client_id: FOURSQUARE_CLIENT_ID,
    client_secret: FOURSQUARE_CLIENT_SECRET,
    intent: 'browse',
    limit: 10,
    categoryId: '4bf58dd8d48988d116941735',
    radius: 1000,
    v: '20180323',
    ll: `${latitude},${longitude}`
  }
}