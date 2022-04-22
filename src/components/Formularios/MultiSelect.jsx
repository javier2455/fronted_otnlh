import React, { useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'



const MultiSelect = () => {
    const [array, setArray] = useState([])
    const data = [
        { Country: "Cuba", id: 1 },
        { Country: "Canada", id: 2 },
        { Country: "EEUU", id: 3 },
        { Country: "France", id: 4 },
        { Country: "India", id: 5 },
    ]

    //const [options] = useState(data)

    let onSelect = (selectedList, selectedItem) => {
        setArray([...array, selectedItem])
    }

    let onRemove = (selectedList, removedItem) => {
        let actualizacion = array.filter(e => e.id !== removedItem.id);
        setArray(actualizacion)
    }

    return (
        <>
            <div>MultiSelect</div>
            <Multiselect
                options={data}
                displayValue="Country"
                onSelect={onSelect}
                onRemove={onRemove}
                placeholder="Selección"
                emptyRecordMsg='No hay opciones que mostrar' />
        </>
    )
}

export default MultiSelect