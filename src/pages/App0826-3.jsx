import $ from 'jquery'
import '../css/App0826-3.css'
import { useEffect } from 'react'
import svg1 from '../assets/react.svg'

const App = () => {

    useEffect(() => {
        // has => 檢查是否有指定的名稱
        $('a:has(.ttpShow)').on('mouseover', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        }).on('mousemove', function (e) {
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        }).on('mouseout', function () {
            $('#ttpPanel').remove();
        })
    }, [])

    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam repellat sint iste distinctio veritatis
                labore error delectus, excepturi, consectetur et harum vel eos rem!
                <a href="#">
                    doloribus
                    <span className="ttpShow">doloribus內容說明。。。</span>
                </a>
                Sed ab, ad repellat incidunt iusto
                doloremque quidem asperiores esse totam aliquam tempora id modi reiciendis architecto ratione vel similique
                saepe placeat quo soluta? Laborum eligendi rem soluta nostrum iure voluptatibus, unde corrupti officiis. Sit
                veritatis blanditiis, praesentium ex odio vero. Quidem libero possimus odio rerum omnis, maiores vero
                laboriosam animi voluptatibus quia aspernatur? Eveniet dicta commodi voluptatem laborum culpa doloribus,
                vero modi beatae reiciendis omnis aliquam asperiores perspiciatis aperiam voluptas, veniam quos provident
                delectus eius aspernatur magni praesentium libero eaque eos. Nam reiciendis porro vel neque error maxime
                repellat, atque laborum, sunt laudantium corrupti placeat tempora, dignissimos explicabo vitae animi quidem
                soluta. Molestiae rem placeat quam minus minima eum repellat iste, nihil voluptatum non recusandae commodi
                nisi eveniet saepe deleniti libero.
                <a href="#">
                    <img src={svg1} alt="" />
                    <span className="ttpShow">圖片說明</span>
                </a>
                Officia qui non velit dolore hic quas eligendi sequi est iusto mollitia
                delectus, placeat ipsam consequatur quo praesentium nisi modi. Doloremque doloribus consequuntur ullam
                mollitia maiores facilis voluptates ex temporibus vitae, harum, explicabo, aspernatur deleniti? Blanditiis
                eius possimus voluptatibus accusantium unde quis. Cum sapiente dolores voluptates, harum itaque doloribus
                officiis veritatis omnis perferendis iste.
            </p>
        </div>

    )
}

export default App