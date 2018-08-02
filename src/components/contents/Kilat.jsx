import React from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';

export default class Kilat extends React.Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <h2 >Daftar Santren Kilat Lengkap</h2>
                    <br />
                    <Row>


                        <Col md="4">
                            <Card>
                                <CardImg top width="100%" src="https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191" alt="Card image cap" />
                                <CardBody>
                                    <div align="left">
                                        <div align="left" class="card-body">
                                            <h5 align="left" class="card-title">Santren Kilat #1 (Coming Soon)</h5>
                                            <p class="card-text">4 Hari Intensif Laravel</p>
                                            <div class="row">
                                                <div class="col-7"><a href="#" class="Small">by Santren Koding</a>
                                                </div>
                                                <div align="right" class="col-5">
                                                    <span class="Small-red">Kuota Terbatas</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">

                        </Col>
                        <Col md="4">

                        </Col>
                    </Row>
                    <div className="py-2 pt-4">
                        <Button className="btn-outline-success ">Lihat Seluruh Santren Kilat</Button>
                    </div>
                </Container>
                <hr />
            </div>
        );
    }
}