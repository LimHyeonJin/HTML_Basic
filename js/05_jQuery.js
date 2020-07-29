// jQuery CDN을 이용했기 때문에 jQuery code를 사용할 수 있다.
// 굉장히 직관적이다.

// button을 클릭하면 아래의 함수가 호출됨
function my_func() {
    // jQuery를 공부할 때 가장먼저 배워야 할것 : selector

    // 1. 전체 선택자 (universal selector)
    // $("*").css("color","red")  // 모든 인자들을 선택해서 css()로 스타일을 바꿔준다. (여기서는 모든 인자의 색을 red로 바꿔준다.)

    // 2. 태그 선택자 (tag selector)
    // $("li").remove()

    // 3. 아이디 선택자 (id selector)
    // #을 사용하면 아이디를 불러올 수 있다.
    // $("#haha").text()  // 인자가 없으면 값을 알아오라는 의미
    // $("#haha").text("제주")  // 인자가 있으면 값을 바꾸라는 의미

    // 4. 클래스 선택자 (class selector)
    // $(".region").css("backgroundColor", "yellow")

    // 5. 구조 선택자 (자식 선택자, 후손 선택자)
    // $("ol > li").css("color","steelblue")  //  > : 자식 선택자
    // $("div li").css("color","pink") //  공백(" ") : 후손 선택자 div의 후손중 li들을 선택

    // 6. 구조 선택자 (형제 선택자)
    // $("#haha + li").remove()  // 아이디haha를 찾고, 그 다음li를 찾아서 삭제.
    // $("#hong ~ li").remove()  // 아이디 hong 찾고, 뒤 모든 li 찾아서 삭제.

    // 7. 속성 선택자
    // $("[id]").css("color","red")  // id라는 속성을 가지고 있는것들 모두.
    // $("[id = hong]").css("color","blue")

    // 이 7가지를 조합하면 왠만한 element는 지정가능.
}

