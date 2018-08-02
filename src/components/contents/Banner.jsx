import React, { Component } from 'react'
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import '../../App'
export default class Banner extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row className="border">
                        <Col md="6" className="bg-danger text-light">
                            <br />
                            <h4>Kegiatan</h4>
                            <br />
                            <p>Koding</p>
                            <p> Belajar Agama dan Al Qur'an</p>
                            <p> Pendidikan Karakter</p>
                        </Col>

                        <Col md="6">
                            <br />
                            <img src="http://i63.tinypic.com/oid9xu.png" alt="" />
                            <h4>"Memberi Manfaat Untuk Ummat"</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
