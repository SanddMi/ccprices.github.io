import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '.env') });

const { API_DATA_URL } = process.env;

/*module.exports = {
	apiURL: API_DATA_URL
}*/

console.log(API_DATA_URL);
