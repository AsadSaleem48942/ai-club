import React from "react";
import AwesomeSlider from "react-awesome-slider";
import { Col, Row } from "react-flexbox-grid";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import 'react-awesome-slider/dist/styles.css';
import { event_config } from "./config";
const AutoplaySlider = withAutoplay(AwesomeSlider);
console.log(CoreStyles, AnimationStyles);

function EventSlider() {
  const events = event_config.map((event, i) => {
    return <div key={i} data-src={require(`../../../imgs/${event.image}`)} />;
  });
  return (
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={10}>
            <AutoplaySlider
              cssModule={[CoreStyles, AnimationStyles]}
              play={true}
              infinite={true}
            >
              {events}
            </AutoplaySlider>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EventSlider;
