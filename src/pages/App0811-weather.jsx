import '../css/App0811-weather.css'
import { BsFillUmbrellaFill } from "react-icons/bs";
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    // useEffect()=>渲染後，只呼叫一次json
    useEffect(() => {
        (async () => {
            // 取得public中的json檔 (plan A)
            // const data = await axios.get('./F-C0032-001.json')
            // console.log(data.data.cwaopendata.dataset);

            // 取得src中的json檔 (plan B)
            const data = await axios.get('./src/json/F-C0032-001.json');
            console.log(data.data.cwaopendata.dataset);
        })();
    }, [])

    return (
        <>
            <div>
                <h2>36小時天氣預報</h2>
                <div className='cards'>
                    <div className='card'>
                        <div className='card-header'>臺北市</div>
                        <div className='card-body'></div>
                        <div className='date'>11日</div>
                        <div className='time'>上午6:00 <br />~<br />下午6:00<br /></div>
                        <div className='weatherPic'>
                            <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
                        </div>
                        <div className='weatherName'>晴午後短暫雷陣雨</div>
                        <div className='pop'>
                            <BsFillUmbrellaFill />
                            80%
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default App