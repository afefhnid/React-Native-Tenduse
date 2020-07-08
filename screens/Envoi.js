import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Constants, BarCodeScanner } from "expo";
import * as Permissions from "expo-permissions";
import { Scan } from "../components/Scan";
import EventsService from "../services/events.service";
import { getColis } from "../actions/favoris.actions";
import { connect } from "react-redux";
class Envoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      lastScannedUrl: null,
      scan: "none",
      colisCode: "",
      validate: "none",
    };
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };

  handleChange(e) {
    this.setState({ colisCode: e.target.value });
    console.log("eeeee", this.state.colisCode);
  }
  details() {
    let { navigation, data } = this.props;
    navigation.navigate("Home");
  }
  async onSumbite(event) {
    //event.preventDefault();
    let { colis } = this.props;
    colis.push(this.state.colisCode);
    console.log(colis);
    this.props.getColis(colis);
    let body = {
      idAssociation: "5f00dfc122dc7e41406b6926",
      idUser: "5f00e0a422dc7e41406b6927",
      colisCode: this.state.colisCode,
    };

    let response = await EventsService.colis(body);
    console.log(response);

    setTimeout(() => {
      this.setState({ validate: "block" });
    }, 10);
    this.setState({ validate: "none" });
    let { navigation, data } = this.props;
    navigation.navigate("Acceuil");
  }
  render() {
    return (
      <View>
        <Text style={{ display: this.state.validate }}>Yesssssssssssss</Text>
        <TouchableOpacity
          onPress={() => this.details()}
          style={styles.inpuitSend}
        >
          <Icon name={"chevron-left"} size={32} />
        </TouchableOpacity>

        <View style={{ display: "flex" }}>
          <Text style={styles.sendText}>Envoi</Text>
        </View>

        <View style={styles.bodyEnvoi}>
          <Text style={styles.envoi}>Envoi</Text>
          <View style={{ paddingTop: 60 }}>
            <TextInput
              label="Identifiant"
              style={styles.inputText}
              placeholder="Taper votre code"
              onChange={(event) => this.handleChange(event)}
            ></TextInput>
            <Scan style={{ backgroundColor: "#fdc04e" }} />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                this.onSumbite();
              }}
            >
              <Text style={styles.saveButtonText}>Envoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "#FDC04E",
  },
  bodyEnvoi: {
    backgroundColor: "#FDC04E",
    height: 1400,
  },
  envoi: {
    color: "black",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
    paddingLeft: 20,
    paddingTop: 20,
  },
  inputText: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "white",
    padding: 15,
    margin: 5,
    backgroundColor: "#fdc04e",
  },
  saveButtonText: {
    color: "#60CD60",
    fontSize: 20,
    textAlign: "center",
  },
  sendText: {
    textAlign: "center",
    marginTop: 0,
    fontWeight: "bold",
    color: "black",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
  },
  inpuitSend: {
    position: "relative",
    top: 32,
    left: 8,
    paddingTop: 15,
  },
});
const mapStateToProps = (state) => {
  return {
    colis: state.colis,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getColis: (colis) => {
      dispatch(getColis(colis));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Envoi);