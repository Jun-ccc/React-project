
import '../css/App0806-1.css'
import Card from '../components/Card'

// 物件資料
const App = () => {
    const photo = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D',
            title: 'Hotel',
            desc: "Come join us!",
            btnName: 'Go somewhere',
            btnURL: 'https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D'
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1724863547894-15efc92e9aad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
            title: 'Airbnb',
            desc: "Don’t just see a place.",
            btnName: 'Go somewhere',
            btnURL: 'https://images.unsplash.com/photo-1724863547894-15efc92e9aad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1727461095465-7477bc847812?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
            title: 'House',
            desc: "Best house images.",
            btnName: 'Go somewhere',
            btnURL: 'https://images.unsplash.com/photo-1727461095465-7477bc847812?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8'
        }
    }

    return (
        <>
            <div className='container'>
                <Card
                    imgURL={photo.photo1.imgURL}
                    title={photo.photo1.title}
                    desc={photo.photo1.desc}
                    btnName={photo.photo1.btnName}
                    btnURL={photo.photo1.btnURL}
                ></Card>

                <Card
                    imgURL={photo.photo2.imgURL}
                    title={photo.photo2.title}
                    desc={photo.photo2.desc}
                    btnName={photo.photo2.btnName}
                    btnURL={photo.photo2.btnURL}
                ></Card>

                <Card
                    imgURL={photo.photo3.imgURL}
                    title={photo.photo3.title}
                    desc={photo.photo3.desc}
                    btnName={photo.photo3.btnName}
                    btnURL={photo.photo3.btnURL}
                ></Card>
            </div>

        </>
    )
}

export default App

// 陣列物件資料 作法
const photo = ({ imgURL, title, desc, h, w }) => {
    return (
        <div className='pht'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>身高:{h}</p>
            <p>體重:{w}</p>
            <p>BMI:{(w / Math.pow(h / 100, 2)).toFixed(2)}</p>
        </div>
    )
}

const arrphotos = [
    {
        imgURL: 'https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D',
        title: 'Hotel',
        desc: "Come join us!",
        btnName: 'Go somewhere',
        btnURL: 'https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D'
    },
]