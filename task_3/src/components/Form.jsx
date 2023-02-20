import { useState } from 'react'

const Form = ({ addValue }) => {
    const [value, setValue] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        addValue(value)
    }

    return (
        <div>
            <form action="">
                <input
                    value={value}
                    type="text"
                    placeholder="type a task, that your should do"
                    onChange={(event) => setValue(event.target.value)}
                />
                <button onClick={(event) => handleClick(event)}>add</button>
            </form>
        </div>
    )
}

export default Form
