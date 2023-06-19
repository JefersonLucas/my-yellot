import { AppError } from '@utils/AppError'
import axios from 'axios'

export const api = axios.create({
	baseURL:
		'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation',
	headers: {
		Authorization: 'Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF',
	},
	timeout: 200000,
})

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.data) {
			return Promise.reject(new AppError(error.response?.data?.detail[0].msg))
		} else {
			return Promise.reject(new AppError(error))
		}
	},
)
