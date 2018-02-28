import axios from 'axios';
import get from "lodash.get";

const apiKey = 'e5dc19b4';

export default {
    async getMovies(search) {
        const data = await axios.get(`http://www.omdbapi.com/?`, {
            params: {
                apikey: apiKey,
                s: search,
            },
        });

        console.log(data);

        return get(data, 'data.Search', []);
    },
    async getMovie(search) {
        const data = await axios.get(`http://www.omdbapi.com/?`, {
            params: {
                apikey: apiKey,
                i: search,
            },
        });

        return get(data, 'data', {});
    }
};
