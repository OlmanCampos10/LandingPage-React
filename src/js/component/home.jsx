import React from 'react';
import {TheHeader} from './header.jsx';
import {Jumbotron} from './jumbo.jsx';
import {Portfolio} from './portfolio.jsx';
import {TheFooter} from './footer.jsx';

//Main view component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="container-fluid">
                <TheHeader title="React.js Lander" />
                <div className="container">
                    <Jumbotron />
                    <Portfolio />
                </div>
                <TheFooter company="Your Website"/>
            </div>
        );
    }
}

