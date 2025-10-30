import React from 'react'
import Navbar from '../../components/Navbar'

import "./ChamadosIndex.css"

const ChamadosIndex = () => {
    return (
        <div>
            <Navbar />
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-body-secondary">
                    2 days ago
                </div>
            </div>
            <button class="cssBtn">Button com CSS</button>
        </div>
    )
}

export default ChamadosIndex