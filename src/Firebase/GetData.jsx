import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import HamburgerNavbar from '../components/navbar/Navbar';

const firebaseConfig = {
    apiKey: "AIzaSyDijCwHryPdti4Cam4CHUcKLq4JgPpNW0E",
    authDomain: "adddata-3a2b3.firebaseapp.com",
    databaseURL: "https://adddata-3a2b3-default-rtdb.firebaseio.com",
    projectId: "adddata-3a2b3",
    storageBucket: "adddata-3a2b3.appspot.com",
    messagingSenderId: "663933625151",
    appId: "1:663933625151:web:e070a215024aa8fb06298a",
    measurementId: "G-MLXB82CW72"
};
const app = initializeApp(firebaseConfig);
function GetData() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const starCountRef = ref(db, 'data/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setData(data);
        });

    }, [])
    const db = getDatabase(app);




    return (
<><HamburgerNavbar/>
        <div style={{textAlign:'center',marginTop:'20px'}}> <h1 className='whitecolor'>Own Added Movies</h1>
        <div className='bigcontainer'>
             
            
            
            {data !== null && data.map((data) => (


            <div className='containeradddata'>

            
                <iframe width="500" height="300" src={data.MovieUrl} title="Motu Patlu | मोटू पतलु एपिसोड | Magical MoonChein | New Episode vootkidstv" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className='containeradddescription  whitecolor'>{data.MovieDescription}</div>
                <div className='containeraddmoviesname whitecolor'>{data.MovieName}</div>

                


            </div>


        ))}</div>
        </div>

        </>
    )
}

export default GetData