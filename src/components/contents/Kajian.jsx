import React from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class Kajian extends React.Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <h2 >Daftar Kajian Koding Lengkap</h2>
                    <br />
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="Card image cap" />
                                <CardBody>
                                    <div align="left">
                                        <div align="left" class="card-body">
                                            <h5 align="left" class="card-title">Kajian Koding #3</h5>
                                            <p class="card-text">ReactJS dan Firebase Auth/Hosting</p>
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
                            <Card>
                                <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
                                <CardBody>
                                    <div align="left">
                                        <div align="left" class="card-body">
                                            <h5 align="left" class="card-title">Kajian Koding #3</h5>
                                            <p class="card-text">ReactJS dan Firebase Auth/Hosting</p>
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
                            <Card>
                                <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
                                <CardBody>
                                    <div align="left">
                                        <div align="left" class="card-body">
                                            <h5 align="left" class="card-title">Kajian Koding #3</h5>
                                            <p class="card-text">ReactJS dan Firebase Auth/Hosting</p>
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
                    </Row>
                    <div className="py-2 pt-4">
                        <Button className="btn-outline-success ">Lihat Seluruh Kajian Koding</Button>
                    </div>
                </Container>
                <hr />
            </div>
        );
    }
}