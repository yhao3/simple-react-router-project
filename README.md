# ver10.0 push 與 replace（待補）
# ver11.0 withRouter 的使用（待補）
React v6.x 中 withRouter 已被移除，改使用函式元件: 
```jsx
export default function Header() {
  const navigate = useNavigate()
  const go =() => {
    navigate(-2);
  }
  return (
    <div className="page-header">
           <h2>React Router Demo</h2>
           <button onClick={()=> navigate(-1)}>Back</button>
           <button onClick={()=> navigate(1)}>Forward</button>
           <button onClick={go}>Go</button>
           </div>
  )
}
```
# ver12.0 BroeserRouter 與 HashRouter（待補）
