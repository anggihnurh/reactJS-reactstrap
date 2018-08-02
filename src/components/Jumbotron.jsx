import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../App'
import './style.css'
const JumbotronKu = (props) => {
    return (
        <div className="App">
            <Jumbotron className="Jumboclass text-light">
                <h1 className="display-3">Belajar jadi Asyik!</h1>
                <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
                <p className="lead">
                    <br />
                    <Button className="btn-lg" color="success">Mulai Belajar</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default JumbotronKu;