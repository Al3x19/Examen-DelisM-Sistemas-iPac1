import { StyleSheet } from 'react-native';
import { colors } from "@/constants/Colors";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({

background:{
  backgroundColor: colors.background,
  flex: 1,
},
container: {
  flex: 1,
  padding: 20,
  backgroundColor: colors.lightGray,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop:30,
    color: colors.darkGray,
  },
  temperature:{
    fontSize: 100,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 120,
    color: colors.darkGray,
  },
  buttonContainer: {
    height: 80,
    width:80,
    fontSize:50,
    backgroundColor: colors.darkGray,
    alignItems:'center',
    marginHorizontal:10,
  },
});

export default styles;
