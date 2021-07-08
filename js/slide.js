// $(function(){
//   var sta = 1;
//  $('.btn_all').click(function(){
 //   $(this).toggleClass('on')//.toggleClass 은 제이쿼리가 3.0 이상만 작동됨 단순디자인 변경 할 때만 사용한다 on/off 식으로 변경 할 때만 사용
 //   if (sta == 1) {//지금 상태가 1이면 addclass를 붙여준다
 //    $(this).addClass('on');
  //    $('.box').fadeIn();//방금 클릭한 것도 열어주고 박스창도 보여라
  //   sta = 2;//모양이 바뀌었을 때
 //  }else {
 //      $(this).removeClass('on');
  //     $('.box').fadeOut();
  //     sta = 1;//원래버전
//  }//else
// }) //btn_all
// })//jq end


$(function(){
  $('.btn button').click(function(){//팝업이 처음부터 닫히게 할려면 css에 display: none 을 준다
    $('#pop_up').hide(); //sildeUP, fadeOut, hide
  }) //btn button click end
  $('.modal').click(function(){
    $('#pop_up').fadeIn();
  }) //modal click end
  $('.modal_select a').each(function(){
      $(this).click(function(){
        var a_href = $(this).attr('href');
        $('.pop').hide();
        $(a_href).show();
        $('.modal_select a').removeClass('.select_btn')
        $(this).addClass('.select_btn');
      })//click                                    
    })//modal_select a  end
    $('#pop_up').click(function(){
      $('#pop_up').hide();//닫기
      //갤러리나 이미지에 사용하면 좋음 
    })
    
})//jq end

$(function(){
  $('.partner_info').click(function(){
   var img = $(this).find('img');//여러개의 partner_info중에서 하나만 하기 위해서 this를 씀
   var img_src = img.attr('data_img');//attr은 태그들을 찾아주는 것이다 ''속에 잇는 값을 기억을 해 주는 것이다.
   var img_alt = img.attr('alt') //이미지의 설명을 찾는것
   var img_title = img.attr('title')//그림설명을 할 자리를 만듬 var에
      $('#modal').show();//열기
      $('#modal img').attr('src',img_src);//attr('src','')이렇게해서 값을 두개 넣어주면 앞에껀 기억을해서 뒤에꺼로 바꾸어줌
      $('#modal .txt').text(img_alt);//글씨가 들어가는 메소드(태그를 계속 추가 하고싶으면 어팬드)위에 기억하는 img_alt를 넣음
      $('#modal .txt_title').text(img_title);//4번 
  })

  $('#modal').click(function(){
      $('#modal').hide();//닫기
      //갤러리나 이미지에 사용하면 좋음 
  })


// https://westzero.tistory.com/112
String.prototype.toKorChars = function() { 
  var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
  cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
  cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
  var str = this, 
  cnt = str.length, 
  chars = [], 
  cCode; 
  for (var i = 0; i < cnt; i++) { 
      cCode = str.charCodeAt(i); 
      if (cCode == 32) { 
        chars.push(" ");
        continue;
      } // 한글이 아닌 경우 
      if (cCode < 0xAC00 || cCode > 0xD7A3) { 
          chars.push(str.charAt(i)); continue; 
          } 
      cCode = str.charCodeAt(i) - 0xAC00; 

      jong = cCode % 28; 
      // 종성 
      jung = ((cCode - jong) / 28 ) % 21 

      // 중성 
      cho = (((cCode - jong) / 28 ) - jung ) / 21 
      // 초성 

      //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
      // chars.push(cCho[cho], cJung[jung]); 
      // if (cJong[jong] !== '') { 
      //     chars.push(cJong[jong]); 
      //     } 


      //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
      chars.push(cCho[cho]);
      chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
      if (cJong[jong] !== '') { 
          chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
      }
     
  } 
  
  return chars; 
}


//타이핑할 문장
var result  = "모든 포트폴리오는 개인작업으로 만들어 졌습니다.";
var typeing1=[];
result = result.split(''); // 한글자씩자름

//각글자 초성,중성,종성으로 나눔
for(var i =0; i<result.length; i++){
  typeing1[i]=result[i].toKorChars();
}

//출력할 엘리먼트요소 가져옴 
var resultDiv = document.getElementsByClassName("result")[0];

//
var text = "";
var i=0; 
var j=0; 
var text = '';

//총글자수
var imax = typeing1.length;

//setInterval을 이용해 반복적으로 출력 
var inter = setInterval(typi,150);


function typi(){
  //글자수만큼 반복후 종료 
  if(i<=imax-1){
      //각 글자가 초성 중성 종성 순서대로 추가되도록 
      var jmax = typeing1[i].length;
      resultDiv.innerHTML = text + typeing1[i][j];
      j++;
      if(j==jmax){
          text+=  typeing1[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
          i++;
          j=0;
      }
  } else{
      clearInterval(inter);
  }
}
})





