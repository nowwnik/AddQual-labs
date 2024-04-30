import './App.css';
import Block from './components/Block';
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

function App() {
    return (
        <div className='myApp'>
            <h1>Что Вам необходимо?</h1>
            <div className='wrapper'>
                <Block
                    image={img1}
                    titleOfBlock={'Первый блок'}
                    text={'Текст, текст, текст, текст, текст, текст, текст.'}
                />
                <Block
                    image={img2}
                    titleOfBlock={'Второй блок'}
                    text={'Текст, текст, текст, текст, текст, текст, текст.'}
                />
                <Block
                    image={img3}
                    titleOfBlock={'Третий блок'}
                    text={'Текст, текст, текст, текст, текст, текст, текст.'}
                />
            </div>
        </div>
    );
}

export default App;
