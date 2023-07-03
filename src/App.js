import './App.css';
import CallApp from 'callapp-lib';


function App() {

  const option = {
    scheme: {
      protocol: 'zhihu',
    },
    // intent: {
    //   package: 'com.zhihu.android',
    //   scheme: 'zhihu',
    // },
    // universal: {
    //   host: 'oia.zhihu.com',
    //   pathKey: '',
    // },
    appstore: 'https://itunes.apple.com/cn/app/id432274380',
    // yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
    fallback: 'https://oia.zhihu.com/',
    timeout: 2000,
  };
  
  const lib = new CallApp(option);

  const handleCallApp = () => {
    lib.open({ path: 'question/270839820/answer/477722658' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleCallApp}>Call App</button>
    </div>
  );
}

export default App;
