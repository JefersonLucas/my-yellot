import {
	Montserrat_400Regular,
	Montserrat_700Bold,
	useFonts,
} from '@expo-google-fonts/montserrat'
import { HomeScreen } from '@screens/Home'
import { ActivityIndicator, StatusBar, View } from 'react-native'

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
	})

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
			{!fontsLoaded ? (
				<HomeScreen />
			) : (
				<ActivityIndicator size={70} color="#6201D1" />
			)}
		</View>
	)
}
