import '../css/App0811-weather.css'
import { BsFillUmbrellaFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    // 建立一個react變數，使用useState Hook
    // 存放各縣市資料
    // const [變數名稱, 更改變數名稱方法] = useState(預設值);
    const [cities, setCities] = useState([]);

    // useEffect()=>渲染後，只呼叫一次json
    useEffect(() => {
        (async () => {
            // 取得public中的json檔 (plan A)
            // const data = await axios.get('./F-C0032-001.json')
            // console.log(data.data.cwaopendata.dataset);

            // 取得src中的json檔 (plan B)
            const jsonData = await axios.get('./src/json/F-C0032-001.json');
            // console.log(jsonData.data.cwaopendata.dataset);

            // 取得各縣市氣象資訊
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            // 將各縣市資訊透過setCities方法，更新給cities
            setCities(location);

        })();
    }, [])


    // 卡片內容
    const CardBody = ({ city, item, index }) => {
        return (
            <>
                <div className='date'>
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            day: 'numeric'
                        })
                    }
                </div>
                <div className='time'>
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                        })
                    }
                    <br />
                    ~<br />
                    {
                        new Date(item.endTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                        })
                    }
                </div>
                <div className='weatherPic'>
                    {/* <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /> */}
                    <img style={{
                        width: '95px',
                        height: '95px',
                    }} src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                </div>
                <div className='weatherName'>
                    {item.parameter.parameterName}
                </div>
                <div className='pop'>
                    <BsFillUmbrellaFill />
                    {
                        `${city.weatherElement[4].time[index].parameter.parameterName}%`
                    }
                </div>
            </>
        )
    }

    // 卡片元件
    function Card({ city }) {
        return (
            <div>
                <div className='card'>
                    <div className='card-header'>
                        {city.locationName}
                    </div>
                    <div className='card-body'>
                        {city.weatherElement[0].time.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <CardBody item={item} city={city} index={index} />
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        )
    }

    return (
        <>
            <h2>36小時天氣預報</h2>
            <div className='cards'>
                {
                    cities.map((city) => {
                        return (
                            // 呼叫元件
                            <Card city={city} key={city.locationName} />
                        )
                    })
                }

            </div>
        </>
    )
}


export default App