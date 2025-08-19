// 次元件
function SecondComponent({ c }) {
    return (
        <>
            <h1>我是secondComponent元件</h1>
            <p>SecondComponent接收的屬性是:{c}</p>
        </>
    )
}

// 子元件 接收主元件傳遞過來的元件 方法二
function MyComponent2({ b }) {
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto at in molestiae, tempora ipsam mollitia asperiores inventore autem distinctio. Suscipit corporis vero cupiditate sapiente, ipsa eos iusto quidem voluptas illo?</p>
            <SecondComponent c={b} />
            我是:{b}
        </>
    )
}

// 子元件 接收主元件傳遞過來的元件 方法一
function MyComponent({ a, children }) {
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto at in molestiae, tempora ipsam mollitia asperiores inventore autem distinctio. Suscipit corporis vero cupiditate sapiente, ipsa eos iusto quidem voluptas illo?</p>
            {children}
            我是:{a}
        </>
    )
}

// 主元件
const App0819b = () => {
    return (
        <div>
            <h1>元件之間，傳遞元件</h1>
            {/* 方法一 此方法較進階 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性c" />
            </MyComponent>

            <hr />
            {/* 方法二 */}
            <MyComponent2 b="屬性b" />
        </div>
    )
}

export default App0819b