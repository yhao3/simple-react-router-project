# ver7.0 Redirect
```jsx
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
{/* Redirect 當上方都匹配失敗，就導向 /home */}
<Route path="*" element={<Navigate to ="/home" />} />
```
- 一般來說寫在所有 `Route` 的“最下方”
- 當上方都匹配失敗，就導向指定路徑