import { extendTheme } from 'native-base'

export const theme = extendTheme({
	colors: {
		success: '#F6C945',
		primary: '#6201D1',
		gray: {
			900: '#212529',
			800: '#343A40',
			700: '#495057',
			600: '#6C757D',
			500: '#ADB5BD',
			400: '#CED4DA',
			300: '#DEE2E6',
			200: '#E9ECEF',
			100: '#F8F9FA',
		},
		white: '#FFFFFF',
		black: '#000000',
	},
	fonts: {
		heading: 'Montserrat_700Bold',
		body: 'Montserrat_400Regular',
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 20,
	},
	sizes: {
		14: 56,
		33: 148,
	},
})
