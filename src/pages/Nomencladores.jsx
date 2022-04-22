import React from 'react'
import TabsNomencladores from '../components/Tabs/TapsNomencladores'

let arrayPrueba = [
    {
        id: 1,
        tipo: "Organismo",
        nombre: "PCC"
    },
    {
        id: 2,
        tipo: "Organismo",
        nombre: "MTSS"
    },
    {
        id: 3,
        tipo: "Organismo",
        nombre: "FMC"
    },
    {
        id: 4,
        tipo: "Empresa",
        nombre: "TransTur"
    },
    {
        id: 5,
        tipo: "Empresa",
        nombre: "Cubanacan"
    },
    {
        id: 6,
        tipo: "Empresa",
        nombre: "CubaSin"
    },
    {
        id: 7,
        tipo: "SectorEstatal",
        nombre: "Onat"
    },
    {
        id: 8,
        tipo: "SectorEstatal",
        nombre: "ONDT"
    },
    {
        id: 9,
        tipo: "SectorEstatal",
        nombre: "Gastronomía"
    }
]
let organismos = arrayPrueba.filter( (org) => org.tipo === "Organismo");
let empresas = arrayPrueba.filter( (emp) => emp.tipo === "Empresa");
let sectorEstatal = arrayPrueba.filter( (sec) => sec.tipo === "SectorEstatal");

const Nomencladores = () => {
    return (
        <div className="content-wrapper">
            <div className="content-header"></div>
            {/* Main content */}
            <section className="content">
                <div /* style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}} */ className="container-fluid">
                    <TabsNomencladores 
                        organismos={organismos}
                        empresas={empresas}
                        sectorEstatal={sectorEstatal}
                        trazas={arrayPrueba}/>
                    {/* <TablaNomencladores trazas={arrayPrueba} /> */}
                </div>
            </section>
        </div>
    )
}

export default Nomencladores