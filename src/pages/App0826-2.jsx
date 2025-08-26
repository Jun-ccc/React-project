import { useEffect, useState } from 'react';
import '../css/App0826-2.css'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function App() {
    // 建立目前背景圖的變數
    const [currentIndex, setCurrentIndex] = useState(0);

    // 建立輪播圖片的陣列物件
    const slides = [
        { url: './images/02.jpg' },
        { url: './images/03.jpg' },
        { url: './images/04.jpg' },
        { url: './images/05.jpg' },
        { url: './images/01.jpg' },
    ]

    // 當currentImgIndex改變時，會觸發useEffect
    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);


        // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    // 下一張
    const nextSlide = () => {
        // 取得前一張的索引編號，檢查是否為最後一個編號
        // 是=>回到第一張
        // 否=>跳到下一張
        setCurrentIndex((prevIndex) => {
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        })
    }

    // 上一張
    const prevSlide = () => {
        // 取得前一張的索引編號，檢查是否為第一個編號
        // 是=>跳到最後張
        // 否=>跳到前一張
        setCurrentImgIndex((prevIndex) => {
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        })
    }

    // 建立左右icon元件 => 按鈕
    const Arrow = ({ direction, onClick }) => {
        <div style={{
            position: "absolute",
            top: "50%",
            cursor: "pointer",
            color: "#fff",
            [direction]: "20px", // 將icon拆開，並且調整左右留白間距
        }}>
            {
                direction === "left" ? (
                    // 左按鈕
                    <FaArrowCircleLeft size={50} onClick={onClick} />
                ) : (
                    // 右按鈕
                    <FaArrowCircleRight size={50} onClick={onClick} />)
            }
        </div>
    }
    return (
        <>
            {/* 滿版最外層 */}
            <div className='wrap' style={{
                maxWidth: '100vw',
                height: '100vh',
                margin: 'auto',
            }}>
                {/* 滿版背景輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    margin: 'auto'
                }}>
                    {/* 文字區 */}
                    <h2 style={{ color: 'red' }}>{slides[currentImgIndex].title}</h2>

                    {/* 左 上一張 */}
                    <Arrow direction={"left"} onClick={prevSlide} />
                    {/* 右 下一張 */}
                    <Arrow direction={"right"} onClick={nextSlide} />
                </div>
            </div>
        </>
    )
}

export default App