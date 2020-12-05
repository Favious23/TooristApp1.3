import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
import Background from "../components/Background";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

class InicioScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Background>
          <Logo />
          <Header>Pagina de inicio</Header>
        </Background>
      </View>
    )
  }
}

class PerfilScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:"15%",
              marginBottom: 5,
            }]}>Fabian Perez</Title>
            <Caption style={styles.caption}>@favious</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon2 name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Santiago, Chile</Text>
        </View>
        <View style={styles.row}>
          <Icon2 name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon2 name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>fabian.perez.canales@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>$140.50</Title>
            <Caption>Monedero</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Tours</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tus favoritos</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name="credit-card-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Metodos de pago</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Soporte</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Configuraciones</Text>
          </View>
        </TouchableRipple>
        
      </View>
      <Button style={styles.button} mode="contained" onPress={() => logoutUser()}>
          Cerrar sesion
        </Button>
    </SafeAreaView>
    )
  }
}

class RutasScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>No hay rutas</Header>
      </View>
    )
  }
}

class MapaScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -33.603065,
            longitude: -70.515708,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // container: {
  //   flex: 2,
  //   //backgroundColor: 'red'
  //   alignContent:   'center',
  //   alignContent: 'center'
  // },
  map: {
    //flex: 1,
    width: "100%",
    height: "100%",
    // marginBottom: "20%"
  },
  button: {
    marginTop: 20,
    width: "50%",
    alignItems: 'center',
    backgroundColor: '#2163f6'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: "10%",
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Inicio: {
      screen: InicioScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon2 name="home" style={[{color: tintColor}]} size={25}/>
          </View>
        ),
      }
    },
    Perfil: {
      screen: PerfilScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon2 name="face-profile" style={[{color: tintColor}]} size={25}/>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' },
      }
    },
    Rutas: {
      screen: RutasScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon2 name="walk" style={[{color: tintColor}]} size={25}/>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Mapa: {
      screen: MapaScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon2 name="map-marker-radius" style={[{color: tintColor}]} size={25}/>
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      }
    },
  },
  {
    initialRouteName: 'Inicio',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#F6820D' },
  }
);

export default createAppContainer(TabNavigator);
