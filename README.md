# ver3.0 為 Nav Bar 動態加上 Highlight - 使用 `NavLink` 取代 `Link`
## 使用 `NavLink` 取代 `Link`
- 使用 `NavLink` 取代 `Link` 後， `NavLink` 中的屬性 `activeClassName` 預設值就為 `active` ，剛好 Bootstrap 的 hightlight 效果 class 名稱就是 `active` ，所以剛剛好就實現需求了，`activeClassName` 屬性可以省略
    ```jsx
    <NavLink className="..." to="/xxx">Xxx</NavLink>
    ```
    效果完全等於: 
    ```jsx
    <NavLink activeClassName="active" className="..." to="/xxx">Xxx</NavLink>
    ```
- 但若 hightlight 效果 class 是我們自定義的，例如: 
    `index.html`
    ```css
    .myHighlight {
        background-color: red !important;
        color: white !important
    }
    ```
    - 舊版: 此時 `activeClassName` 屬性就必須指定為 `myHighlight`
        ```jsx
        <NavLink activeClassName="myHighlight" className="..." to="/xxx">Xxx</NavLink>
        ```
    - 新版: 不能直接使用 `activeClassName` ，改使用三元運算符
        ```jsx
        <NavLink className={ ({isActive}) => 'list-group-item' + (isActive ? ' myHighlight' : '') }  to="/about">About</NavLink>
        ```
        ⚠️注意:
        - 若有同時使用 Bootstrap ，自定義的 css 樣式要加上 `!important`，才能覆蓋權限過高的 Bootstrap 樣式
        - ' myHighlight' 前的空格不可省略，因為要串接字串成 
            ```jsx
            className="固定的class myHighlight" // 正確的
            className="固定的classmyHighlight"  // 錯誤的
            ```
