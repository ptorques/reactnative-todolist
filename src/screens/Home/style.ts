import { BackHandler, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 25,
      },
      header: {
        position: "absolute",
        top: 0,
        backgroundColor: "#0d0d0d",
        paddingVertical: "14%",
        paddingHorizontal: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      logo: {
        position: "absolute",
        top: "10%",
        right: "40%"
      },
      input: {
          flex: 1,
          top: "30%",
          height: 56,
          backgroundColor: '#262626',
          borderRadius: 3,
          color: '#FFF',
          padding: 16,
          fontSize: 16,
          marginRight: 4,
      },
      button: {
          width: 56,
          top: "30%",
          height: 56,
          borderRadius: 5,
          backgroundColor:'#1e709f',
          alignItems: 'center',
          justifyContent: 'center',
      },
      form:{
          width: '100%',
          flexDirection: 'row',
          marginTop: 36, 
          marginBottom: 42,
      },
      listEmptyText: {
          color: '#888888',
          fontSize: 14,
          textAlign: 'center',
          fontWeight: "bold",
      },
      emptyList: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
      },
      counter: {
        width: "100%",
        flexDirection: "row",
        marginTop: "27%",
      },
      textCriadas: {
        fontWeight: "bold",
        color: "#4aa4d9",
      },
      textDone: {
        fontWeight: "bold",
        color: "#7e80f5"
      },
      counterDisplay: {
        height: 20,
        borderRadius: 15,
        backgroundColor: "#333333",
        marginRight: "51%",
        marginLeft: 3,
        color: "#fff",
        fontSize: 10,
        textAlign: "center"
      },
      split: {
        height: 3,
        borderRadius: 10,
        width: "100%",
        backgroundColor: "#252525",
        marginVertical: 10
      }
  });
  
  export default styles;