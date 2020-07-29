// $(document).ready(function () {
// // 문서가 준비되면(브라우저에 내용이 완전히 출력되면) function실행.
//     // li를 찾아서 각각에 대한 event처리
//     $("ul > li").on("mouseover", function () { // 마우스를 올려놓으면 함수를 실행해
//     $(this).addClass("myStyle")  //
//     })
//     $("ul > li").on("mouseleave", function () {
//         $(this).removeClass("myStyle")
//     })
// })  // HTML이 자바 스크립트 코드를 실행할때 같이 실행된다.

// function set_active() {
//     // 현재 이벤트가 발생된 이벤트 소스에 CSS를 적용한다.
//     // 이벤트 소스 : 이벤트가 발생된 element  =>  this
//     $(this).addClass("myStyle")
// }

function insert_text() {
    $("#myDiv").html("<h1> 이것은 소리없는 아우우우성 </h1>")
    // text() : 문자를 그냥 가져다가 넣는다. 태그적용 x
    // html() : text()와 동일하게 동작하는데 태그적용 o
}

function delete_div() {
    // $("#deleteDiv").remove()  // 자신을 포함해서 후손들도 삭제
    $("#deleteDiv").empty()  // 자신을 제외한 후손들만 삭제
}

function add_list() {
    // 없는 태그를 만드는 방법
    // <li class="myStyle">박길동</li>이 만들어진다.
    // $("<li></li>").text("박길동").attr("class","myStyle")
    // var my_li = $("<li></li>").text("박길동").addClass("myStyle")
    // 태그를 생성한다음 원하는 위치에 가져다 붙인다.
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙인다.
    // $("ul").append(my_li)
    // 2. prepend() : 자식으로 붙이고, 첫번째 자식을 붙인다.
    // $("ul").prepend(my_li)
    // 3. after() : 형제로 붙이고 다음 형제로 붙인다.
    // $("ul > li:nth-child(2)").after(my_li)
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙인다.
    // $("ul > li:last").before(my_li)


}