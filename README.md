# ver5.0 使用 `switch` 元件改善通透性問題
## ⚠️注意
新版用 `Routes` 包住所有 `Route` 後已無此問題，無需使用`switch` 
## 問題引入
- 若同時有多個 Route 元件的 path 值相同，則會全部匹配顯示於頁面，存在效能問題，而不像 switch 加上 break 後，一匹配就跳出
- 因此我們可以 import Switch 元件將所有 Route 元件包起來優化