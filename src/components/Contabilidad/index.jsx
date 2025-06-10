import React from 'react';
import './index.css';
import { useState } from 'react';

const cuentas = [
    { nombre: 'Caja', activo: 5000, pasivo: 0 },
    { nombre: 'Banco', activo: 3000, pasivo: 0 },
    { nombre: 'Préstamo Bancario', activo: 0, pasivo: 2000 },
    { nombre: 'Proveedores', activo: 0, pasivo: 1500 },
];



const AccountingModule = () => {
    const [cuentasState, setCuentasState] = useState(cuentas);
    const [nombre, setNombre] = useState('');
    const [activo, setActivo] = useState('');
    const [pasivo, setPasivo] = useState('');
    const [opcion, setOpcion] = useState('');

    const handleAddCuenta = (e) => {
        e.preventDefault();
        if (!nombre) return;
        setCuentasState([
            ...cuentasState,
            {
                nombre,
                activo: Number(activo) || 0,
                pasivo: Number(pasivo) || 0,
            },
        ]);
        setNombre('');
        setActivo('');
        setPasivo('');
    };

    const handleDeleteCuenta = (indexToDelete) => {
        setCuentasState(cuentasState.filter((_, idx) => idx !== indexToDelete));
    };

    return (
        <div className='contenedorContable'>
            
            <h1 className='table-title'> Contabilidad</h1>

            <div className='card-view elevation-1'>

                <form onSubmit={handleAddCuenta} className='formularioContable elevation-2'>

                    <div className='contabilidadInputs'>
                        <select className='elevation-1' value={nombre} onChange={e => setNombre(e.target.value)} required >
                            <option value="">Selecciona una cuenta</option>
                            {
                                cuentas.map((cuenta, idx) => (
                                    <option key={idx} value={cuenta.nombre}>
                                        {cuenta.nombre}
                                    </option>
                                ))
                            }
                        </select>

                        <select required  className='elevation-1' style={{ marginLeft: '10px', marginRight: '10px' }} onChange={e => setOpcion(e.target.value)}>
                            <option value="">Selecciona una opción</option>
                            <option value="aumenta">Aumenta</option>
                            <option value="disminuye">Disminuye</option>
                        </select>
                        
                        <input className='elevation-1' type="number" placeholder="Pasivo" value={opcion == 'aumenta' ? pasivo : activo } onChange={e => {
                            opcion == 'aumenta' ? setPasivo(e.target.value) : setActivo(e.target.value)
                        
                        }}/>

                    </div>
                    
                    <button className='elevation-1' type="submit">Agregar</button>
                    
                </form>

                <table >
                    
                    <thead>
                        <tr>
                            <th>Cuenta</th>
                            <th>Activo</th>
                            <th>Pasivo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cuentasState.map((acc, index) => (
                            <tr key={index}>
                                <td>{acc.nombre}</td>
                                <td>{acc.activo}</td>
                                <td>{acc.pasivo}</td>
                                <td>
                                    <button className='elevation-1' onClick={() => handleDeleteCuenta(index)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
              
        </div>
    );
};

export  { AccountingModule };