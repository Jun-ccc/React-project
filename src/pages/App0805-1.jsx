import './css/App0805-1.css'
function App() {
    // 一般變數
    const dogname = "泰迪"
    // 屬性名稱變數
    const myClassName = "myClass"
    // 方法
    function myClick() {
        alert('我是按鈕1')
    }

    return (
        <>
            <div>
                <p style={{ fontSize: "64px" }} className={myClassName}> 姓名：{dogname}</p>
                <button type="button" onClick={myClick}>按鈕1</button>
                <button type="button" onClick={() => {
                    alert('我是按鈕2')
                }}>按鈕2</button>
            </div>
        </>

    )
}
export default App;