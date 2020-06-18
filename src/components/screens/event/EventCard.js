import React, { Component } from "react";
import { Col } from "react-flexbox-grid";
import dayjs from "dayjs";
var LocalizedFormat = require("dayjs/plugin/localizedFormat");

class EventCard extends Component {
  state = {
    show: false,
  };
  handleDetailsShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    dayjs.extend(LocalizedFormat);
    const { show } = this.state;
    const { event } = this.props;
    const formatDate = dayjs(event.date).format("DD-MM-YYYY");
    const formatTime = dayjs(event.date).format("h:mm A");
    return (
      <Col xs={12} lg={3}>
        <div className="wrapper frontback-cards">
          <div className={`card-container ${show ? "addFlip" : ""}`}>
            <div className="flip-animation">
              <section className="item-card">
                <div className="item-summary">
                  <h2 className="title">{event.title}</h2>
                  <p className="venue">{event.venue}</p>
                  <address className="address">
                    <p className="street-address">{event.address}</p>
                    <p className="locality">{event.location}</p>
                  </address>
                </div>
                <div className="image-wrapper">
                  <img
                    className="featured-image"
                    src={event.title_image}
                    alt="The Paper Kites performing, overlooking a crowd"
                  />
                </div>
                <div className="item-time-date">
                  <time className="date">{formatDate}</time>
                  <time className="time">{formatTime}</time>
                </div>
                <div className="item-buttons front-buttons">
                  <button
                    className="btn-details grey"
                    aria-label="Learn more about the band and venue"
                    onClick={this.handleDetailsShow}
                  >
                    {" "}
                    Details
                  </button>
                  <a
                    className="btn-tickets blue"
                    aria-label="Purchase tickets for this event"
                    href="#"
                  >
                    Tickets
                  </a>
                </div>
              </section>
              <section
                className={`item-card-details ${show ? "backCard-flip" : ""}`}
              >
                <div className="bio-block">
                  <h2 className="bio-band">{event.title}</h2>
                  <h3 className="bio-title">Bio</h3>
                </div>
                <div className="scroll-block">
                  <p className="bio-text">{event.bio}</p>
                </div>
                <div className="more-info">
                  <p>
                    <a
                      className="info"
                      aria-label="Visit The Paper Kites website"
                      href="#"
                    >
                      {event.title} Details
                    </a>
                  </p>
                  <p>
                    <a
                      className="info"
                      aria-label="Visit the venue's website"
                      href="#"
                    >
                      Venue Details
                    </a>
                  </p>
                </div>
                <div className="item-buttons back">
                  <button
                    className="btn-details grey back-arrow"
                    aria-label="Learn more about the band and venue"
                    href="#"
                    onClick={this.handleDetailsShow}
                  ></button>
                  <a
                    className="btn-tickets blue on-back"
                    aria-label="Purchase tickets for this event"
                    href="#"
                  >
                    Tickets
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default EventCard;
