import React, { Component} from "react";
import { Col, Row } from "react-flexbox-grid";
import EventSlider from "./EventSlider";
import "./event.css";
import "antd/dist/antd.css";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
class EventPage extends Component {
  render() {
    return (
      <div className="event_page">
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={8}>
                <div className="event_page_topBar"></div>
                <h1 className="event_page_Heading">Our Upcoming Events</h1>
                <p className="event_page_desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eget ipsum diam. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Phasellus viverra
                  rutrum urna volutpat vehicula.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <EventSlider />
        <SearchBar />
        <CardContainer />
      </div>
    );
  }
}

export default EventPage;
