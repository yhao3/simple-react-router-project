# ver8.0 嵌套路由
## 需求
Home 頁面中包含 2 個子頁面，分別為 Tags 及 Posts
## 步驟
1. 先將 App.jsx 中 Home 的路由註冊，從默認的「精準匹配」改成「模糊匹配」
    - `App.jsx`
    ```jsx
    {/* <Route path="/home" element={<Home />} /> */}
    {/* ve8.0 home 改成「模糊匹配」 */}
    <Route path="/home/*" element={<Home />} />
    ```
1. 在 Home 資料夾中新建 Tags 及 Posts 資料夾並分別建立元件
2. 將傳統 Home 頁面中的 Tags 及 Posts 的 `<a>` 標籤，改成 `<NavLink>` 元件，在此使用 ver4.0 封裝的 `<MyNavLink>` 元件，並將 `href` 屬性改成 `to` 屬性
3. 又因為 Route 的註冊是有先後順序的，所以 to 屬性的值必須加上前綴 `/home` ，在 App.jsx 中匹配時才能和 模糊匹配 `/home/*` 匹配成功
    - `Home`
    ```jsx
    {/* 傳統 a 標籤 */}
    {/* <a className="list-group-item" href="./home-tags">Tags</a> */}

    {/* 錯誤的: */}
    {/* <MyNavLink to="/tags">Tags</MyNavLink> */}
    {/* 正確的: */}
    <MyNavLink to="/home/tags">Tags</MyNavLink>
    ```
## 分析: 
1. 當在 `Home` 點擊 `<MyNavLink to="/home/tags">Tags</MyNavLink>` 時
2. 會先到 `App.jsx` 中，找到最先註冊的路由，分別為: 
    ```jsx
    <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to ="/home" />} />
    </Routes>
    ```
3. 此時會與 模糊匹配的 `path="/home/*"` 匹配成功！
4. 因此 url 會變成 `/home/tags`，並且！！！會包含 `/home` 下的所有內容，即 Nav Bar 的 Home 依然會有 Highlight，還有 `<h3>This is Home</h3>` 也會顯示
5. 意思就是，因為點擊的是`/home` 路徑下導向 `/home/tags` 的 NavLink ，也就代表我們給的是 `/home/tags`
6. 所以從最先註冊的路由開始配對: 
    - `App.jsx`: `<Route path="/home/*" element={<Home />} />` 
        `/home/tags` 與 `/home/*` 配對成功 ⮕ 顯示 `<Home />` 元件的內容
    - `Home`: `<Route path="/tags" element={ <Tags /> } />` 
        `/home/tags` 與 `/tags` 配對成功 配對成功 ⮕ 顯示 `<Tags />` 元件的內容
7. 因此，最後在頁面上就會包含所有匹配成功的內容，即:
    - `<Home />` 元件的內容
    - `<Tags />` 元件的內容
## 注意: 
1. `App.jsx` 中的父路由必須改成「模糊匹配」
    ```jsx
    <Route path="/home/*" element={ <Home /> } />
    ```
2. 【需要的】註冊子路由時“不能”加上「父路由的 path 值」
    - `Home`
    ```jsx
    // 錯誤的: 
    <Route path="/home/tags" element={ <Tags /> } />
    // 正確的: 2 種寫法
    <Route path="tags" element={ <Tags /> } />
    <Route path="/tags" element={ <Tags /> } />
    ```
3. 【我們給的】`NavLink` 或 `MyNavLink` 的 `to` 屬性值，則“必須”加上「父路由的 path 值」
    - `Home`
    ```jsx
    // 錯誤的: 
    <NavLink to="/tags" className='list-group-item'>Tags</NavLink>
    // 正確的: 
    <NavLink to="/home/tags" className='list-group-item'>Tags</NavLink>
    ```
4. 路由的匹配是按照「註冊路由的順序」進行匹配的
