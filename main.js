window.onload = function(){

  const tabs = document.querySelectorAll('#tabs ul li');

  for(let i = 0; i < tabs.length;i++) {
    tabs[i].addEventListener('click', function(e){
      // tab 콘텐츠 초기화
      for(let a = 0; a < tabs.length; a++){
        const tab = document.querySelectorAll('.tab')[a]
        tab.style.display = 'none'
      }
      // 현재 텝 표시
      const tab = document.querySelectorAll('.tab')[i]
      tab.style.display = 'block'
    })
  }

}  

