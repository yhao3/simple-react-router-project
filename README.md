# ver6.0 path 的 精準匹配 與 模糊匹配
- 新版默認為「精準匹配」，如果想使用模糊匹配可以在 path路徑加上 `/*` ，例如: 
    ```jsx
    <Route path="/home/a/*" element={<Home />} />
    ```
    此時以下 NavLink 都可以匹配成功: 
    ```jsx
    // 匹配成功:
    <NavLink to="/home/a">Home</NavLink>
    <NavLink to="/home/a/b">Home</NavLink> // 多給 -> ok

    // 匹配失敗:
    <NavLink to="/home">Home</NavLink>     // 少給 -> no
    <NavLink to="a/home">Home</NavLink> 
    ```
    💬關鍵: 
    - 精準匹配: 不可多給，也不可少給
    - 模糊匹配: 可以多給，不可少給