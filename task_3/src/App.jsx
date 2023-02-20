import React, { useState, useEffect } from 'react'
import Form from './components/Form'

function App() {
    const [list, setList] = useState([])
    const [foundList, setFoundList] = useState([...list])

    useEffect(() => {
        setFoundList(list)
    }, [list])

    const addValue = (value) => {
        if (list.includes(value)) {
            const updatedList = list
            updatedList.splice(list.indexOf(value), 1)
            setList([...updatedList, value])
        } else setList([...list, value])
    }

    const deleteValue = (value) => {
        setFoundList(foundList.filter((listValue) => listValue !== value))
    }

    const search = (value) => {
        setFoundList(
            list.filter((listValue) => `${listValue}`.startsWith(value.trim()))
        )
    }

    return (
        <div className="App">
            <Form addValue={addValue} />
            <input
                type="text"
                onChange={(event) => search(event.target.value)}
            />
            <ul>
                {foundList.length == 0 ? (
                    <li>Ничего не найдено</li>
                ) : (
                    foundList.map((value, index) => {
                        return (
                            <li key={value}>
                                <div>
                                    {index}. {value}
                                </div>
                                <button
                                    onClick={() => deleteValue(value)}
                                    onKeyUp={(event) => event.key === 'Enter'}
                                >
                                    delete
                                </button>
                            </li>
                        )
                    })
                )}
            </ul>
        </div>
    )
}

export default App
