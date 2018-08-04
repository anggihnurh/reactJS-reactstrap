import React, { Component } from 'react';
import '../../App.css';
import './c-styles.css'
export default class Sponsor extends Component {
  render() {
    return (
      <div className="App bg-white">
        <h4 className="py-3">Sponsor & Partner</h4>
        <div className="container borderbottom">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <img style={{ width: "100%" }} src="http://i67.tinypic.com/2hcn70k.jpg" alt="" />
            </div>
            <div className="col-md-4">
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-2"><img className="sponsor-img" src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png" alt="" /></div>
            <div className="col-lg-2"><img className="sponsor-img" src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358" alt="" /></div>
            <div className="col-lg-2"><img className="sponsor-img" src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg" alt="" /></div>
            <div className="col-lg-2"><img className="sponsor-img" src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png" alt="" /></div>
            <div className="col-lg-2"><img className="sponsor-img" src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500" alt="" /></div>
            <div className="col-lg-2"><img className="sponsor-img" src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png" alt="" /></div>
          </div>
          <div className="row">
            <div className="col-lg-2"><img height="100px" src="http://sdk.semarangkota.go.id/web/pemkot.png" alt="" /></div>
            <div className="col-lg-4"><img height="80px" src="http://www.sandec.org/images/sandec-logo.png" alt="" /></div>
            <div className="col-lg-2"><img height="100px" src="http://i64.tinypic.com/28v94w6.png" alt="" /></div>
            <div className="col-lg-4"><img height="50px" width="100%" src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png" alt="" /></div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <hr />
      </div>
    );
  }
}
