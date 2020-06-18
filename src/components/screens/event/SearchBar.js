import React, { Component } from "react";
import { Badge } from "antd";
import { Select } from "antd";
import { Col, Row } from "react-flexbox-grid";
const { Option } = Select;

class SearchBar extends Component {
  state = {
    query: "",
    filter: "all",
  };

  handleChange = (value) => {
    this.setState({
      filter: value,
    });
  };
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs" className="event_page_searchBar">
            <Col xs={6} lg={2}>
              <h2 className="event_page_searchBar_tag">
                All Events{" "}
                <Badge count={10} style={{ backgroundColor: "#50b6d9" }} />
              </h2>{" "}
            </Col>
            <Col xs={10} lg={6}>
              <div className="search-bar">
                <input placeholder="Search" type="text" name="search" />
              </div>
            </Col>
            <Col xs={6} lg={2}>
              {" "}
              <Select
                defaultValue="all"
                className="event_page_searchBar_select"
                onChange={this.handleChange}
              >
                <Option value="all">All</Option>
                <Option value="upcoming">Upcoming</Option>
                <Option value="past">Past</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
