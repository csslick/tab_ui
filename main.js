window.onload = function(){

  var tabs = document.querySelectorAll('#tabs ul li');

  for(let i = 0; i < tabs.length;i++) {
    tabs[i].addEventListener('click', function(e){
      // tab 콘텐츠 초기화
      for(let a = 0; a < tabs.length; a++){
        var tab = document.querySelectorAll('.tab')[a]
        tab.style.display = 'none'
        // 버튼 스타일 초기화
        tabs[a].classList.remove('active');
      }

      // 현재 텝 표시
      var tab = document.querySelectorAll('.tab')[i]
      tab.style.display = 'block'
      tabs[i].classList.add('active'); // 현재버튼 스타일
    })
  }

}  

