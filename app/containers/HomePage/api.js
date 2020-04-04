import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/v1/hotels';

export const getHotelsList = filters => {
    return axios.get(`${apiUrl}${filters}`);
}