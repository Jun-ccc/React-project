import axios from "axios";
import { useState } from "react";


const App = () => {

    // 檢測是否連上api
    // 

    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "FTyVqI2J2zGtQGEESlrxJD2vqrRkC3rniycH3B0xNtU";
    const [filterString, setFilterString] = useState('cafe');

    // 建立非同步方法，取得遠端資料
    const getPhotos = async () => {
        // console.log(`${api}?client_id=${accessKey}&query${filterString}`)

        // 發出請求給遠端api，傳回結果
        const result = await axios.get(`${api}?client_id=${accessKey}&query${filterString}`)

        // 全部資料
        console.log(result);
    }

    getPhotos();

    return (
        <div>App</div>
    )
}

export default App