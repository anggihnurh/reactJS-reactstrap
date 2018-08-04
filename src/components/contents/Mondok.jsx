import React, { Component } from 'react';
import '../../App.css';
import { Button, Container, Row, Col } from 'reactstrap';

export default class Mondok extends Component {
  render() {
    return (
      <div className="App m-4">
        <h4>Mondok by Santren Koding</h4>
        <p>
          Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3
          Tahun hingga jaminan kerja
        </p>
        <Container className="my-4">
          <Row>
            <Col md="4" />
            <Col md="4">
              <img
                src="http://i67.tinypic.com/2m2gkyp.png"
                alt=""
                width="100%"
              />
            </Col>
            <Col md="4" />
          </Row>
        </Container>
        <Button outline color="success" size="sm">
          Lihat Selengkapnya
        </Button>
        <hr />
      </div>

    );
  }
}
