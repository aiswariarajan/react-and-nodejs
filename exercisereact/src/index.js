import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile/profile'
import NavBar from './navbar/navbar';
import EatComponent from './eat/eating';
import Card from './card/card';

ReactDOM.render(
<span>
<NavBar></NavBar>
<Profile></Profile>
<Card></Card>
<EatComponent></EatComponent>

</span>, document.getElementById('root'));



