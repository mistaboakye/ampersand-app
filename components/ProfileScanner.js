import React from "react";
import SvgQRCode from "react-native-qrcode-svg";

export default function ProfileScannner() {
  let profilePhoto = require("../assets/ceo.jpg");

  return <SvgQRCode value="Mista Boakye" logo={profilePhoto} size={300} />;
}
