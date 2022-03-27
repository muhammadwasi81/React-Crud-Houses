const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
  get = async () => {
    try {
      console.log('inside try block for fetching house');
      const resp = await fetch(HOUSES_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log('oops, looks like fetchHouses had an issue.', e);
    }
  };

  put = async (house) => {
    try {
      console.log('inside try block for updating houses');
      console.log(house);
      console.log('Houses Endpoint: ' + HOUSES_ENDPOINT + house._id);
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(house),
      });
      console.log('body is: ' + JSON.stringify(house));
      console.log('resp.json is' + resp.json());
      return await resp.json();
    } catch (e) {
      console.log('oops, looks like we had an issue updating our house .', e);
    }
  };

  create = async (house) => {
    console.log('got inside create');
    console.log('at this point, house is: ' + house);
    console.log('json.stringify(house) is: ');
    console.log(JSON.stringify(house));
    try {
      console.log(`${HOUSES_ENDPOINT}`);
      const resp = await fetch(`${HOUSES_ENDPOINT}/`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: house,
        }),
      });

      console.log('resp is: ');
      console.log(resp);
      return await resp.json();
    } catch (e) {
      console.log('error with create');
      console.log('e is: ');
      console.log(e);
    }
  };
}

export const housesApi = new HousesApi();
