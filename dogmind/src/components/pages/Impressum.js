import React from 'react'
import '../../assets/css/Contact.css';
import NavbarSub from '../NavbarSub';

function Impressum() {
  return (
    <div>
    <NavbarSub />
    <div className="text-center p-3 w-100 d-block mb-0" style={{ fontSize: '3 rem' }}>
    <h1>Impressum</h1>
    <p>Doris Neuhold</p>
    <p>Diplomierte Hundetrainerin</p>
    <p>www.doggymind.at</p>
    <p>| Mobil: 0660 123 456</p>
    <p>Mail: office@doggymind.at</p>
    </div>
    </div>
  )
}

export default Impressum


