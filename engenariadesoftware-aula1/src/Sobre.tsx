import React from 'react';
import './Manga.css'
import vite from './assets/vite.svg'

export default function Sobre(){
    return(
        <div className="tela">
            <div className="sub-tela">
                <img src={vite} className="figura" alt="figura" />
            </div>
        </div>
    )
}