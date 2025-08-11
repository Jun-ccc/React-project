import Employee from '../components/Employee'

// 建立物件資料
const employees = {
    emp1: {
        name: "員工1",
        age: "21"
    },
    emp2: {
        name: "員工2",
        age: "22"
    },
    emp3: {
        name: "員工3",
        age: "23"
    },
}

// 建立陣列物件資料
const arrEmployees = [
    {
        id: 1,
        name: "員工1",
        age: "21",
        h: 160,
        w: 50,
    },
    {
        id: 2,
        name: "員工2",
        age: "22",
        h: 169,
        w: 58,
    },
    {
        id: 3,
        name: "員工3",
        age: "23",
        h: 178,
        w: 70,
    },
]

const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件，使用陣列物件資料 */}
            {
                arrEmployees.map((emp) => {
                    return (
                        <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w} />
                    )
                })
            }

            {/* 呼叫員工元件，使用物件資料 */}
            {/* <Employee name={employees.emp1.name} age={employees.emp1.age} />
            <Employee name={employees.emp2.name} age={employees.emp2.age} />
            <Employee name={employees.emp3.name} age={employees.emp3.age} /> */}

            {/* 呼叫員工元件，使用固定值 */}
            {/* <Employee name="員工1" age="21" />
            <Employee name="員工2" age="22" />
            <Employee name="員工3" age="23" /> */}
        </div>

    )
}

export default App