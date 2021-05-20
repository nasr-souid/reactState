import React, { Component } from 'react'
import './Profile.css';

import ProfilePhoto from '../ProfilePhoto.png';
const bio="Jeune Ingénieur, engagé, dynamique, convaincu de l’importance de l’agronomie pour la société d’aujourd’hui et de demain, est soucieux d’innover, de développer et de promouvoir une agriculture durable, une industrie vertueuse et des territoires vivants."

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.person = {
        fullName:"Nasr SOUID",
        bio:bio, 
        imgSrc:ProfilePhoto, 
        profession:"Ingénieur Gestion des Ressources en eau"
        }
        this.state={
        show:false
        }
        this.state = {date: new Date()}
    }

    toggle = () => {
        this.setState({show: !this.state.show})
    }
    render() {
        return (
            <div >
            <button className='btn' onClick={this.toggle} style={{fontSize:30}}>Press</button>
            {this.state.show && (
                <div className='Profile'>
                    <h2>{this.person.fullName}</h2>
                    <br/>
                    <br/>
                    <h4>{this.person.profession}</h4>
                    <br/>
                    <br/>
                    <img src={this.person.imgSrc} alt='uuu'  style={{width: 240,height: 180,borderRadius:5}}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{textJustify:'justify'}}>{this.person.bio}</p>
                </div>
                )}
                <h4>{this.date}</h4>
            </div>
            );
        }
    }

export default Profile
