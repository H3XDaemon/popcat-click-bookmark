# popcat-click-bookmark
popcat.click書籤一鍵自動開點.w.
<p align="left">
  <img src="popcat1.png" width="100" title="p">
  <img src="popcat2.png" width="100" title="op">
</p>

## 電腦Chrome
新增一個書籤，把以下代碼貼在書籤的網址欄位 ↘
```javascript
javascript:(function(){var event=new KeyboardEvent('keydown',{key:'g',ctrlKey:true});
setInterval(function(){for(i=0;i<5;i++){document.dispatchEvent(event);}},200)})()
```
![image](https://user-images.githubusercontent.com/42803553/129440224-6508cd8f-a826-43a5-b701-f251dbfe8d45.png)

在 https://popcat.click 頁面上按一下此書籤即可開點。

## 手機Chrome
假如你有開書籤同步且已做過電腦版步驟就無需在手機上再新增一次書籤
直接到 https://popcat.click
然後再搜尋欄直接搜尋你書籤的名稱
![image](https://user-images.githubusercontent.com/42803553/129440435-39eb288f-e36b-417e-9192-11633aa0b863.png)
![image](https://user-images.githubusercontent.com/42803553/129440527-ae14e3f6-df6e-4254-907c-01265fe8f6db.png)

點搜尋欄裡的書籤即可開點
