import {
	Montserrat_400Regular,
	Montserrat_700Bold,
	useFonts,
} from '@expo-google-fonts/montserrat'
import { HomeScreen } from '@screens/Home'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from 'react-native'

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
	})

	return (
		<>
			{fontsLoaded ? (
				<HomeScreen />
			) : (
				<ActivityIndicator size={50} color="#6201D1" />
			)}

			<StatusBar style="auto" />
		</>
	)
}
