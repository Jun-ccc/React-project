import React from 'react'
import '../css/App0806-1.css'
const App = () => {
    // 資料抽離
    const photo = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D',
            title: 'Hotel',
            desc: "Come join us",
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
            desc: "Best house images",
            btnName: 'Go somewhere',
            btnURL: 'https://images.unsplash.com/photo-1727461095465-7477bc847812?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8'
        }
    }

    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={photo.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photo.photo1.title}</h5>
                        <p className="card-text">{photo.photo1.desc}</p>
                        <a href={photo.photo1.btnURL} className="btn">{photo.photo1.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photo.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photo.photo2.title}</h5>
                        <p className="card-text">{photo.photo2.desc}</p>
                        <a href={photo.photo2.btnURL} className="btn">{photo.photo2.btnName}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photo.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photo.photo3.title}</h5>
                        <p className="card-text">{photo.photo3.desc}</p>
                        <a href={photo.photo3.btnURL} className="btn">{photo.photo3.btnName}</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App