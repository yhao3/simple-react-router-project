# ver9.0 向路由元件傳遞參數（待捕）
## ⚠️注意: react-router-dom v6.x 版本採用 `useXxx` hook 的方式來向路由元件傳遞參數， 之後學到 hook 再補課
## 向路由元件傳遞 params 參數（待捕）
### ⚠️注意: 
react-router-dom v6.x 版本採用 `useParams` hook 的方式來向路由元件傳遞 params 參數，但 hook 不能在 類式元件 中使用，只能使用 函式元件，如下: 
- `Details`
```jsx
import {useParams} from 'react-router-dom'
export default function Details () {
    const {id, title} = useParams();
    const findDetailsData = DetailsData.find(item => item.id === Number(id));
    return (
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>Content: {findDetailsData.content}</li>
        </ul>
    )
}
```
## 向路由元件傳遞 search 參數（待捕）

## 向路由元件傳遞 state 參數（待捕）
```jsx
<Link to={"details"} state={{ id: item.id, title: item.title }}>{item.title}</Link>
获取state方法使用hook，const { state } = useLocation();
```