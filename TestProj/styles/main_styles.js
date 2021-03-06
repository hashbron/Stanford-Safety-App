import { Platform, 
        StyleSheet, 
        Text, 
        TextInput, 
        View, 
        KeyboardAvoidingView, 
        Button,
        TouchableHighlight} from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
	full_container: {
		flex: 1,
		backgroundColor: 'black',
	}, 
	container: {
	    flex: 1,
	    justifyContent: 'center',
	    backgroundColor: 'black',
	    paddingTop: Constants.statusBarHeight,
	},
	buttonSpaceContainer: {
		flex: 0.5, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	textboxcontainers: {
		alignItems: 'center',
	},
	header: {
		fontSize: 20,
		textAlign: 'center',
		margin: 30,
	},
	inputContainer: {
		borderBottomColor: '#F5FCFF',
		backgroundColor: '#FFFFFF',
		borderRadius:30,
		borderBottomWidth: 1,
		width:250,
		height:45,
		marginBottom:20,
		flexDirection: 'row',
		alignItems:'center',
	},
	inputs:{
		height:45,
		marginLeft:16,
		borderBottomColor: '#FFFFFF',
		color: 'black',
		flex:1,
	},
	buttonContainer: {
		height:45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom:20,
		width:250,
		borderRadius:30,
	},
	loginButton: {
		backgroundColor: "maroon",
	},
	loginText: {
		color: 'white',
		fontSize: 20,
	},
	dropdown: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: 'white',
	},
	welcome: {
		fontSize: 40,
		textAlign: 'center',
		margin: 10,
		marginBottom: 30,
		color: 'white',
	},
	instructions: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
		marginBottom: 10,
		margin: 10,
	},
	buttonSpaceContainer: {
		flex: 0.5, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	phonenumber: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
		marginBottom: 10,
	},
	warning: {
		fontSize: 17,
		textAlign: 'center',
		color: 'lightgray',
		marginBottom: 10,
		margin: 10,
	},
	button: {
		fontSize: 17,
		margin: 10,
	},
	separator: {
		marginVertical: 16,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	button_create_or_join: {
		backgroundColor: "crimson",
		height: 50,
		flex: 0.25,
		textAlign: 'justify',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	page: {
		fontSize: 20,
		flex: 1, 
		flexDirection: 'column',
		textAlign: 'center',
		paddingTop: 80,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 80,
		backgroundColor: 'black',
	},
	textInput: {
		fontSize: 20
	},
	sectionListItem: {
		backgroundColor: 'maroon',
		padding: 20,
		marginVertical: 6,
		marginHorizontal: 10,
		borderRadius: 20,
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		color: 'white'

	}

});


export {styles}