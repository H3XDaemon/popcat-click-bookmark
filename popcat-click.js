javascript:(function(){var event=new KeyboardEvent('keydown',{key:'g',ctrlKey:true});setInterval(function(){for(i=0;i<5;i++){document.dispatchEvent(event);}},200)})()
