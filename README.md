# Getting Started with Create Simple React Router App
## Github
https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
## install vue-router-dom
```
cd simple-react-router-project
npm install vue-router-dom@6
```
## 原始靜態頁面請看: 
- src/orgin/home.html
- src/orgin/about.html
## Hint
1. 將固定顯示的區塊，寫在 App.jsx
    ```jsx
    - class ⮕ className
    - style="..." ⮕ style={{ ... }}
    ```
2. 把不同的展示區，拆分成多個元件
    ## 關鍵: 
    - step1: 點擊超連結，影響路徑
    - step2: 監測路徑變化，同步切換元件
## STEP
### `App.jsx`
1. import `Link` component from `react-router-dom` package
    - 使用「{}」import，因為 react-router-dom 一定是 export 很多元件（使用分別export），所以我們要用哪個，就用「{}」取哪個即可
    ```jsx
    import { Link } from 'react-router-dom';
    ```
2. 使用上面 import 的 Link 元件來實現在 React 中切換元件
    ```jsx
    <Link className="list-group-item" to="/about">About</Link>
    <Link className="list-group-item" to="/home">Home</Link>
    ```
3. 再 import `BrowserRouter`，並將"所有" Link 元件包起來，並加上 `to="/xxx"` 屬性及其路徑值(代表點擊路徑會變成xxx)
    ```jsx
    import { Link,  BrowserRouter} from 'react-router-dom';
    ...
    <BrowserRouter>
        <Link className="list-group-item" to="/about">About</Link>
        <Link className="list-group-item" to="/home">Home</Link>
    </BrowserRouter>
    ```
4. immport `Home` & `About` component
    ```jsx
    import Home from "./component/Home";
    import About from "./component/About";
    ```
5. 要依照路徑切換元件，因此要 import `Route` ，並將 `Home` & `About` 註冊路由，並加上 `path="/xxx"` 及 `element={<元件名 />}` 兩屬性，又因為有多個 Route ，因此要在 import `, Routes` 將所有 `Route` 包起來
    ```jsx
    import { Link, Route, Routes } from 'react-router-dom';
    ...
    <Routes>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
    </Routes>
    ```
6. 又因為 <Routes> 也必須被 <BrowserRouter> 包起來，且 <BrowserRouter> 必須是和上面的 <BrowserRouter> 是同一個！因此最偷懶的做法是直接到 src 下的 index.js 把整個 <App/> 包起來 
    ```jsx
    import { BrowserRouter } from 'react-router-dom';
    ...
    ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById('root') )
    ```
