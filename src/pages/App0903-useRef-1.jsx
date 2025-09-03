import React, { useRef, useState } from 'react'


const App = () => {
    // useState 變數
    /* const [inputValue, setInputValue] = useState(''); */

    // useRef 變數給 input (相當於document.querySelector)
    const inputRef = useRef(null);

    console.log('App渲染了...')

    function btnHandler() {

        // 查看Ref物件
        console.log(inputRef);

        // 查看Ref值
        console.log(inputRef.current.value);

        // 查看Ref型別
        console.log(inputRef.current.type);

        // 更改類型
        inputRef.current.type = 'password';

        // 查看Ref型別
        console.log(inputRef.current.type);

    }

    return (
        <div className='wrap'>
            <h1>useRef</h1><hr />

            {/* 使用 useState */}
            {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}

            {/* 使用 useRef */}
            <input type="text" ref={inputRef} />
            <button onClick={btnHandler}>click</button>
        </div>
    )
}

export default App