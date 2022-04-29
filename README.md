# ver4.0 封裝 `NavLink` 元件
## GOAL
從 ver3.0 可以發現，每個 `NavLink` 元件中有許多重複且冗餘的屬性，因此我們可以封裝 `NavLink` 元件，暴露出 需要指定的屬性即可。ex: 
- Before: 
    ```jsx
    <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') }  to="/about">About</NavLink>
    <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') }  to="/home">Home</NavLink>
    ```
- After: 
    ```jsx
    <MyNavLink to="/about">About</MyNavLink>
    <MyNavLink to="/home">Home</MyNavLink>
    ```
## Start
1. 因為 `MyNavLink` 是屬於「一般元件」，因此我們需要在 src / components 資料夾中新增此元件
    - 目錄結構
        ```
        src
        └- component
                └- MyNavLink
                    └- index.jsx
        ```
2. `MyNavLink`
    - `rcc` template
    - import `NavLink`
    ```jsx
    import React, { Component } from 'react'
    import { NavLink } from 'react-router-dom'

    export default class MyNavLink extends Component {
        render() {
            return (
                <NavLink ... >...</NavLink>
            )
        }
    }
    ```
3. 思考 `MyNavLink` 要寫什麼？
    - 調用 `MyNavLink` 時，會傳入「需要指定的 props」，例如: 
        App.jsx
        ```jsx
        {/* 封裝 NavLink */}
        <MyNavLink to="/home">Home</MyNavLink>
        <MyNavLink to="/about">About</MyNavLink>
        ```
4. 元件的標籤體也是一種特殊的 props ，名為 `children` ，一樣可以通過 this.props 去取得，因此我們可以模擬 NavLink 的寫法，把按鈕上的文字寫在元件的標籤體中
    ```jsx
    <NavLink ...>Abc</NavLink>

    // 效果等同: 
    <NavLink ... children="Abc" />
    ```
5. `MyNavLink`
    - 標準寫法: 
    ```jsx
    import React, { Component } from 'react'
    import { NavLink } from 'react-router-dom'

    export default class MyNavLink extends Component {
        render() {
            console.log(this.props);
            const {to, children} = this.props;
            return (
                <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') } to={to}>{children}</NavLink>
            )
        }
    }
    ```
    - 精簡寫法: 
    ```jsx
    import React, { Component } from 'react'
    import { NavLink } from 'react-router-dom'

    export default class MyNavLink extends Component {
        render() {
            console.log(this.props);
            // const {to, children} = this.props;
            return (
                <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') } {...this.props} />
            )
        }
    }
    ```