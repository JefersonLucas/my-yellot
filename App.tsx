import {
	Montserrat_400Regular,
	Montserrat_700Bold,
	useFonts,
} from '@expo-google-fonts/montserrat'
import { HomeScreen } from '@screens/Home'
import { NativeBaseProvider } from 'native-base'
import { ActivityIndicator, StatusBar } from 'react-native'

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
	})

	return (
		<NativeBaseProvider>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
			{fontsLoaded ? (
				<HomeScreen />
			) : (
				<ActivityIndicator size={70} color="#6201D1" />
			)}
		</NativeBaseProvider>
	)
}
