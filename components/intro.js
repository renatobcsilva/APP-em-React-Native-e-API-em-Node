import { StyleSheet, Text, View } from "react-native";

const Intro = () => (
    <View style={styles.container}>    
        <Text style={styles.pp}>Canguru Jack aguarda você em sua próxima aventura!
    Seja na Austrália ou Nova Zelândia, nós temos as passagens certas
    com um preço sob medida para você.</Text>
    <Text style={styles.sp}>Deslize pela lista abaixo e conheça nossos destinos:</Text>
    </View>

)

const styles = StyleSheet.create({

    container: {
        width: '90%',
        fontFamily: 'Avenir',
    },

    pp: {
        marginTop: 10,
        fontFamily: 'Avenir',
        textAlign: "center",
        fontSize: 15,
            
      },

      sp: {
        marginTop: 10,
        width: '90%',
        fontFamily: 'Avenir',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
            
      },
});

export default Intro