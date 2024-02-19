import { Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { Text, View } from '@/components/Themed';
import { useFonts } from "expo-font";

export default function TabOneScreen() {
  const [fontsLoaded] = useFonts({
    'AkweProBold': require('@/assets/fonts/AkweProConSC-Bold.ttf'),
  });
  if (!fontsLoaded) return ( <Text>Chargement en cours...</Text> )
  return (
    <View style={styles.container}>
      <Image style={styles.imageViolet2} source={require('@/assets/images/violetBackground.png')}></Image>
      <Image style={styles.imageViolet} source={require('@/assets/images/deezerEffect.png')}></Image>
      <Text style={styles.title}>BIENVENUE SUR DEEZER</Text>
      <Text style={styles.subTitle}>Inscris-toi gratuitement ou connecte-toi</Text>
      <Button labelStyle={styles.buttonContinueText} style={styles.buttonContinue} mode='text' textColor='#fff' compact={true}>Continuer avec un e-mail</Button>
      <Text style={styles.wether}>ou</Text>
      <View style={styles.buttonsContainer}>
      <View style={styles.appleLogoContainer}>
        <Image style={styles.appleLogo} source={require('@/assets/images/Apple_logo_white.svg.png')}></Image>
      </View>
      <View style={styles.googleLogoContainer}>
      <Image style={styles.googleLogo} source={require('@/assets/images/Google__G__logo.svg.png')}></Image>
      </View>
      <View style={styles.facebookLogoContainer}>
      <Image style={styles.facebookLogo} source={require('@/assets/images/Facebook-logo-blue-circle-large-transparent-png.png')}></Image>
      </View>
      </View>
      <View style={styles.containerOffer}>
      <Image style={styles.orangeLogo} source={require('@/assets/images/Orange-SA-logo.png')}></Image>
      <Image style={styles.sfrLogo} source={require('@/assets/images/sfr_rectangular.png')}></Image>
      <Image style={styles.bouyguesLogo} source={require('@/assets/images/Bouygues_Telecom_(alt_logo).svg.png')}></Image>
      </View>
      <Text style={styles.enablePartenaire}>Activer mon offre partenaire   {'ᐳ'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#0f0c13'
  },
  imageViolet2: {
    width: '100%',
    height: 40
  },
  imageViolet: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 72,
    position: 'absolute',
    top: '29%',
    fontFamily: 'AkweProBold',
    width: 350
  },
  subTitle: {
    top: '50%',
    left: '6%',
    color: '#ccc',
    position: 'absolute',
    fontSize: 16
  },
  buttonContinueText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold'
  },
  buttonContinue: {
    borderWidth: 2,
    borderRadius: 15,
    width: 350,
    height: 45,
    position: 'absolute',
    top: '56%',
    borderColor: '#a83cfc',
    backgroundColor: '#a83cfc',
  },
  wether: {
    position: 'absolute',
    top: '63%',
    color: '#ccc'
  },
  buttonsContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '82%'
  },
  appleLogoContainer: {
    borderWidth: 1,
    borderColor: '#3e3c41',
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appleLogo: {
    width: 17,
    height: 20
  },
  googleLogoContainer: {
    borderWidth: 1,
    borderColor: '#3e3c41',
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleLogo: {
    width: 20,
    height: 23
  },
  facebookLogoContainer: {
    borderWidth: 1,
    borderColor: '#3e3c41',
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookLogo: {
    width: 20,
    height: 20
  },
  containerOffer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: '8%',
    display: 'flex',
    flexDirection: 'row'
  },
  orangeLogo: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  sfrLogo: {
    width: 22,
    height: 25,
    marginHorizontal: 8,

  },
  bouyguesLogo: {
    width: 22,
    height: 27,
    marginHorizontal: 8,
  },
  enablePartenaire: {
    position: 'absolute',
    bottom: '5.8%',
    color: '#ccc',
    fontSize: 12
  }
});
