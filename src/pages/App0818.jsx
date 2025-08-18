import React, { useState } from 'react'

// 建立元件 方法一
function MyComponent() {
    const [counts, setCounts] = useState(0);
    const handleClick = () => {
        setCounts(counts + 1);
    }
    return (
        <button id='btn1' onClick={{ handleClick }}>點擊次數:{counts}</button>
    )
}
// 建立元件 方法二
// const MycComponent = () => {
//     return (

//     )
// }

const App0818 = () => {
    // let counts = 0;
    // const [counts, setCounts] = useState(0);

    return (
        <div>
            {/* <button id='btn1' onClick={() => {
                setCounts(counts + 1);
                console.log(counts);
            }}>點擊次數:{counts}</button> */}
            <MyComponent />
        </div>
    )
}

export default App0818