import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import EventCard from "./EventCard";
import { event_config } from "./config"
class CardContainer extends Component {
  render() {
    const events = event_config.map((event,i) => {
      return <EventCard key={i} event={event} />;
    });
    return (
      <Row className="event_page_cardContainer">
        <Col xs={12}>
          <Row center="xs">
            <Col xs={10}>
              <Row start="xs">{events}</Row>
            </Col>
            <Col xs={10}></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default CardContainer;
