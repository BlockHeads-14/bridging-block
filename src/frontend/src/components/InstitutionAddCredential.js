import React, {useEffect, useState} from 'react';
import './TableView.css';
import NavigationInsitution from './NavbarInstitution';
import './Navbar.css';

function InstitutionAddCredential() {
	
 	return (
		//<div style={{ marginTop: '50px' }}>
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<NavigationInsitution/>
					<div class="col py-3">
						<h2>Add Credential</h2>	
					</div>
				</div>
			</div>
		</div>
  	)
}

export default InstitutionAddCredential;
