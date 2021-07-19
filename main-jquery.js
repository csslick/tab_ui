$(function(){
  $('#tabs ul li').click(function(){
    var i = $(this).index(); // 현재 클릭한 배열값
    $('.tab').css('display', 'none');
    $('.tab').eq(i).css('display', 'block'); // 클릭한 콘텐츠만 표시

    /* 버튼 스타일 */
    $('#tabs ul li').removeClass('active');
    $(this).addClass('active');
  });
});
