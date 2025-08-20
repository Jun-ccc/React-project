import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

const TodoWrapper = () => {
    // 因為有N個todo，所以用陣列存放
    // const [todos,setTodos] = useState(['繳停車費'，'對發票']);
    // 陣列內容若有增減時，索引值會異動，
    // 避免異動資料時造成索引值錯亂，將陣列改為陣列物件，
    // 而key值用亂數來產生。

    const [todos, setTodos] = useState(
        [
            { content: '繳停車費', id: Math.random(), isCompleted: false },
            { content: '對發票', id: Math.random(), isCompleted: false },
        ]
    );

    // 建立刪除todo
    // 傳入被刪除的todo.id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    // 建立切換isCompleted屬性函式
    // isCompleted => false
    // isCompleted => true
    // 檢查被點擊的項目id是否跟陣列中的id一樣
    // yes => 1.取出todo 2.將isComleted屬性值反向(NOT)
    // no => todo不變
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>

            {/* 方法一 */}
            <CreateForm todos={todos} setTodos={setTodos} />

            {/* 方法二 */}
            {/* <CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 1. 使用...其餘運算值來保留原陣列內容
                // 2. 再加上新的物件內容
                setTodos([...todos, { content: newContent, id: Math.random(), isCompleted: false }])
            }} /> */}

            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />
                })
            }

        </div>
    )
}

export default TodoWrapper