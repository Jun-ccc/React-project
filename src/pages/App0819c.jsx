import { useState } from "react"
import "../images"

function App0819c() {
    const [curImg, setCurImg] = useState(2);
    const arrPhotos = [
        "./images/01.jpg",
        "./images/02.jpg",
        "./images/03.jpg",
        "./images/04.jpg",
        "./images/05.jpg",
    ]

    return (
        <div>
            <h1>小圖換大圖</h1><hr />
            <div>
                <div>
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index}
                                    src={photo}
                                    alt=""
                                    width={120}
                                    height={80}
                                    style={{ cursor: 'pointer' }}

                                    // 左鍵點一下時
                                    onClick={() => {
                                        // 更新最新縮圖的索引值
                                        setCurImg(index)
                                        let showPic = document.querySelector('#showPic');
                                        showPic.style.display = "block";
                                    }}

                                // 滑鼠碰到時
                                /* onMouseOver={() => {
                                    setCurImg(index)
                                }} */
                                //  滑鼠離開時
                                /* onMouseOut={() => {
                                    setCurImg(2)
                                }} */
                                />
                            )
                        })
                    }
                </div>
                <div>
                    {/* <img src={arrPhotos[curImg]} alt="" width={420} height={280} /> */}
                    {/* 顯示大圖，預設看不見，當縮圖被左鍵點一下時，才會顯示 */}
                    <img
                        id="showPic"
                        src={arrPhotos[curImg]}
                        alt=""
                        width={420}
                        height={280}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default App0819c