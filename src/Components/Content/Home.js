import React from "react";
import Lottie from "lottie-react-web";
import devicesAnim from "/assets/anim/devices.json";
import { Paper } from "@material-ui/core";

export default props => (
  <Paper>
    <Lottie
      direction={1}
      options={{
        animationData: devicesAnim,
        loop: true
      }}
    />
  </Paper>
);
