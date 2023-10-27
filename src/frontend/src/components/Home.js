import React from 'react';
// import { Link } from 'react-router-dom';
import {NavLink} from "react-bootstrap";

function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="container">
                <h1 className="text-center mb-5">Who are you?</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Graduate</h5>
                                <p className="card-text">Create your credential wallet.</p>
                                <NavLink href="/create" className="btn btn-danger" style={{width:'35%', padding:'8px'}}  >Get Started</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Institution</h5>
                                <p className="card-text">Verify your graduates' certificates.</p>
                                <NavLink href="login" className="btn btn-danger" style={{width:'35%', padding:'8px'}}>Get Started</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Requester</h5>
                                <p className="card-text">Request verification of a certificate.</p>
                                <NavLink href="/requester" className="btn btn-danger" style={{width:'35%', padding:'8px'}}>Get Started</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

//
// function Home() {
//     return (
//
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//
//             <ul>
//                 <li>
//                     <Link to="/create/graduate">Graduate</Link>
//                 </li>
//                 <li>
//                     <Link to="/institution">Institution</Link>
//                 </li>
//                 <li>
//                     <Link to="/requester">Requester</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// }