function print_text() {

    console.log($("#apple").text())
    console.log($("#pineapple").text())
    console.log($("ul > li[class]").text())

    console.log($("input[type = text]").val())

    // console.log($("ol > li.myList:first").text())  // ol안에 li의 클래스가 myList인것 중에 첫번째
    // console.log($("ol > li.myList:first + li").text()) //위에꺼 다음 li
    // console.log($("ol > li.myList:last").text())   // ol안에 li의 클래스가 myList인것 중에 마지막

    console.log($("ol > li.myList:nth-child(1)").text())
    console.log($("ol > li.myList:nth-child(2)").text())
    console.log($("ol > li.myList:nth-child(3)").text())



    $("input[type = text]").attr("size",10)  // 속성값을 가져와서 변경함


}
function my_func() {
    // select box에서 과일이 바뀌면 실행된다.
    // 1. 선택한 과일이 어떤 과일인지 알아내야 한다.

    var fruit = $("select > option:selected").text()

    var my_list = $("ul > li")
    my_list.each(function (idx, item) {
        if($(item).text() == fruit){
            $(item).css("color", "red")
        }
        else {
            $(item).css("color","black")
        }
    }) // my_list를 돌면서 괄호한을 실행시킨다.
}