import { useState } from 'react'

const App0818r = () => {
    // const txt = 'user';
    const [txt, setTxt] = useState('user');
    return (
        <div>
            <h2>文字方塊</h2><hr />
            帳號:<input type="text" value={txt} onChange={(e) => {
                console.log(e.target.value);
            }} />
            <button onClick={() => {
                alert(`帳號:${txt}`);
            }}></button>
        </div>
    )
}

export default App0818r