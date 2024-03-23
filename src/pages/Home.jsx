import * as React from 'react';
import './home.css'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function  HamburgerNavbar() {





  return (



<div>
 
<section class="top-nav">
    <div>
      
        <Link id='linkss' to="/"><img id='logo' src="./logo.png" alt="" /></Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>  <Link id='linkss' to="/">Home</Link></li>
      <li><Link  id='linkss' to="/Movies">Movies</Link></li>
      <li>  <Link  id='linkss' to="/GetData">Your Movies</Link></li>
      <li><Link   id='linkss' to="/AddMovie">Add Movie</Link></li>
   
    </ul>
  </section>
  

   <div className='c-n1'>
<div className='c-n6'><h className='c-n2'>Welcome</h>
<p className='c-n3'>The ultimate destination for movie lovers. Explore Now..</p>
<div className='c-n5'><input className='c-n4' type="text" placeholder="Search for movies"/></div></div>



   </div>

    </div>
  );
}
export default  HamburgerNavbar;