import React, {Component} from 'react';
import './footer.css';


class Footer extends Component{
    CopyRight =() =>{
        return(
            <h2 variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            {'Coding Cafe'}
            {new Date().getFullYear()}
            {'.'}
        </h2>
        )
    }

    render(){
        return(
            <Footer>
                <div className="footer 1-box Is-center">
                    {this.CopyRight()}
                </div>
            </Footer>
        )
    }
}


export default Footer;