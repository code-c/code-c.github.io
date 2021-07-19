import React from 'react';

function Footer() {
    return(
        <footer>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-3">
                        <hr className="light"></hr>
                        <h5>Developer</h5>
                        <hr className="light"></hr>
                        <a href="/AboutMe"><p>Codie Cottrell</p></a>
                    </div>
                    <div className="col-md-6">
                        <hr className="light"></hr>
                        <h5>Email</h5>
                        <hr className="light"></hr>
                        <a href="mailto:codiecottrell@gmail.com"><p>codiecottrell@gmail.com</p></a>
                    </div>
                    <div className="col-md-3">
                        <hr className="light"></hr>
                        <h5>Mobile</h5>
                        <hr className="light"></hr>
                        <p>(207) 745 4193</p>
                    </div>
                    <div><a href='https://pngtree.com/so/curve'>curve png from pngtree.com</a></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;