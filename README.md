# ver2.0 拆分「路由元件」及「一般元件」
## 路由元件及一般元件的差異
1. 寫法不同
    - 一般元件: 
        ```jsx
        <Xxx />
        ```
    - 路由元件: 
        ```jsx
        <Routes>
            <Route path="/xxx" element={<Xxx />} />
            <Route path="/yyy" element={<Yyy />} />
            ...
        </Routes>
        ```
2. 存放位置不同: 
    - 一般元件: `src`/`components`
    - 路由元件: `src`/`pages`
3. ❌接收到的 props 不同: 
    - 一般元件: 用元件時傳遞什麼，就能收到什麼
    - 路由元件: 接收到三個固定的 props...(新版的已改掉)
    
    - 新版: (待求證)
        1. 目錄結構
            ```
            BrowserRouter
                └-- Router ------------------------------ (1)
                    └-- Navigation.Provider ------------- (2)
                        └-- Location.Provider ----------- (3)
                            └-- App
                                └-- Link ForwardRef ----- (4)
                                └-- Link ForwardRef ----- (5)
                                └-- Routes
                                    └-- Route.Provider
                                        └-- About
            ```
        2. props
            ```
            (1) Router: 
                {
                    "children": "<App />",
                    "location": {
                        "pathname": "/about",
                        "search": "",
                        "hash": "",
                        "state": null,
                        "key": "kj6u526k"
                    },
                    "navigationType": "POP",
                    "navigator": {
                        "action": "POP",
                        "location": "{
                            hash: \"\", 
                            key: \"kj6u526k\", 
                            pathname: \"/about\", 
                            sea…
                        }",
                        "createHref": "ƒ createHref() {}",
                        "push": "ƒ push() {}", ⭐️
                        "replace": "ƒ replace() {}", ⭐️
                        "go": "ƒ go() {}", ⭐️
                        "back": "ƒ back() {}", ⭐️
                        "forward": "ƒ forward() {}", ⭐️
                        "listen": "ƒ listen() {}",
                        "block": "ƒ block() {}"
                    }
                }
            (2) Navigation.Provider: 
                {
                    "value": {
                        "basename": "/",
                        "navigator": {
                            "action": "POP",
                            "location": {
                                "pathname": "/about", ⭐️
                                "search": "", ⭐️
                                "hash": "", 
                                "state": null, ⭐️
                                "key": "kj6u526k"
                            },
                            "createHref": "ƒ createHref() {}",
                            "push": "ƒ push() {}", ⭐️
                            "replace": "ƒ replace() {}", ⭐️
                            "go": "ƒ go() {}", ⭐️
                            "back": "ƒ back() {}", ⭐️
                            "forward": "ƒ forward() {}", ⭐️
                            "listen": "ƒ listen() {}",
                            "block": "ƒ block() {}"
                        },
                        "static": false
                    },
                    "children": "<ContextProvider />"
                }
            (3) Location.Provider: 
                {
                    "children": "<App />",
                    "value": {
                        "location": {
                            "pathname": "/about", ⭐️
                            "search": "", ⭐️
                            "hash": "",
                            "state": null, ⭐️
                            "key": "kj6u526k"
                        },
                        "navigationType": "POP"
                    }
                }
            (4) Link ForwardRef: 
                {
                    "className": "list-group-item",
                    "to": "/about",
                    "children": "About"
                }
            (5) Link ForwardRef: 
                {
                    "className": "list-group-item",
                    "to": "/home",
                    "children": "Home"
                } 
            ```