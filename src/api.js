import mapServerData from './mapper';

export function loadList() {
  return fetch('/api/stations')
    .then(response => response.json())
    .then(mapServerData);
}

export function loadDetails(id) {
  return fetch(`/api/stations/${id}`)
    .then(response => response.json());
}
