import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = '#333'
        inputRef.current.style.color = '#fff'
    }

    return (
        <div>
            <h1>useRef-取得游標</h1>

            <label htmlFor="input1">帳號</label>
            <input type="text" id='input' ref={inputRef} />
            <button onClick={focusInput}>取得游標</button>
        </div>
    )
}

export default App