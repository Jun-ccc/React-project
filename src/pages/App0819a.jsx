// 建立子元件
// 直接使用props物件 方法一
function Mycomponent(props) {
    return (
        <>
            <div>Hello 1 !</div>
            <div>{props.a}</div>
            <div>{props.b}</div>
            {props.c()}
        </>
    )
}

// 物件解構=>{物件成員} 方法二
function Mycomponent2({ a, b, c }) {
    return (
        <>
            <div>Hello 2 !</div>
            <div>{a}</div>
            <div>{b}</div>
            {c()}
        </>
    )
}

// 物件解構=>{物件成員}
function Mycomponent3({ a, b = "我是預設值", c }) {
    return (
        <>
            <div>Hello 3 !</div>
            <div>{a}</div>
            <div>{b}</div>
            {c()}
        </>
    )
}

// 父元件
const App0819a = () => {
    return (
        <>
            {/* 呼叫元件 */}
            <Mycomponent a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <Mycomponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <Mycomponent3 a="我是屬性a" b="泰瑞" c={() => { console.log("123") }} />
        </>
    )
}

export default App0819a