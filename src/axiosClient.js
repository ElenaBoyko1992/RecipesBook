import axios from 'axios'

const axiosClient = axios.create({
	baseURL: 'https://www.themealdb.com/api/json/v1/1/',
	//withCredentials: true
});

export default axiosClient;