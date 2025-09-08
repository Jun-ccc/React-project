import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'


const App = () => {
    // 作用中的變數
    const [activeQuetion, setActiveQuestion] = useState(null)

    // FAQ資料
    const question = [
        {
            id: 1,
            question: "題目1",
            answer: "答案1",
        },
        {
            id: 2,
            question: "題目2",
            answer: "答案2",
        },
        {
            id: 3,
            question: "題目3",
            answer: "答案3",
        }
    ]

    return (
        <div className='wrap' style={{
            maxWidth: '100vw',
            height: '100vh',
            backgroundColor: '#292929ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className='accordion' style={{
                width: '80%',
                margin: 'auto',
                maxWidth: '1400px',
                backgroundColor: '#afafafff',
                padding: '8px',
                border: '5px',
                borderRadius: '12px',
            }}>
                <h2 style={{
                    textAlign: 'center',
                    margin: '6px',
                }}>FAQ標題</h2>

                {
                    // 帶出陣列中的資料
                    question.map((q) => {
                        return (
                            <div key={q.id} style={{ marginBottom: "5px" }}>
                                {/* QA按鈕 */}
                                <button style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    border: 'none',
                                    outline: 'none',
                                    padding: '4px',
                                    backgroundColor: '#eeeeeeff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: '6px',
                                }}
                                    onClick={() => { setActiveQuestion(activeQuetion === q.id ? null : q.id) }}
                                >
                                    {/* 帶出題目 */}
                                    {q.question}
                                    {/* 加減號的icon */}
                                    {activeQuetion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                </button>
                                {/* 摺疊動畫 */}
                                <AnimatePresence>
                                    {
                                        activeQuetion === q.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{ marginTop: '5px', color: '#000000ff', fontSize: '14px', }}
                                            >
                                                {/* 答案 */}
                                                {q.answer}
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App