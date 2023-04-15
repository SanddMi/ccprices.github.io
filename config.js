import dotenv from 'dotenv';
dotenv.config();

const { API_DATA_URL } = process.env

module.exports = {
	apiURL: API_DATA_URL
}