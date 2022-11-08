import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../src/img/Logo.png';
import kanguru from '../src/img/KanguruJack.png';

const Header = () => (
    <View style={styles.container}>
        <View style={styles.row}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.email}>Email: info@renatour.com.br </Text>
        </View>
        <Image source={kanguru} style={styles.kanguru} />
    </View>
)

const styles = StyleSheet.create({

    container: {
        fontFamily: 'Avenir',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0, 
    },

    kanguru: {
        width: 200,
        height: 200,
        borderRadius: '100%',
        marginTop: 0,        
      },

    email: {
       fontFamily: 'Avenir',
       marginStart: 4,
      },

      logo: {
        width: 180,
        height: 100,
        marginTop: 0,   
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 0,
        marginTop: 0,
    }
});

export default Header