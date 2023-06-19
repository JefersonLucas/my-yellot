import { Loading } from '@components'
import {
	Montserrat_400Regular,
	Montserrat_700Bold,
	useFonts,
} from '@expo-google-fonts/montserrat'
import { HomeScreen } from '@screens/Home'
import { theme } from '@theme'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
	})

	return (
		<NativeBaseProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>

			{fontsLoaded ? <HomeScreen /> : <Loading />}
		</NativeBaseProvider>
	)
}
