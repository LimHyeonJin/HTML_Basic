function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 enter key일 경우에만 처리
    // enter의 키 값이 13

    if (event.keyCode == 13) {
        // 서버쪽 프로그램을 호출해서 결과를 받아온다.
        // jQuery를 이용해 AJAX 처리를 해야한다.
        // ajax의 인자로 javascript 객체를 넣어준다.
        // javascript 객체는 => { key : value, key : value, ...}
        // data : 서버 프로그램에게 넘겨줄 데이터들...
        $("tbody").empty()
        $.ajax({
            async: true, // ajax sync를 동기 방식으로 할지, 비동기 방식으로 할지  비동기 방식의 호출은 true!
            url: "http://192.168.0.200:8080/bookSearch/search",
            data: {
                keyword: $("input[type=text]").val()
            },
            type: "GET",
            timeout: 3000,
            dataType: "json",  // 결과 JSON을 JavaScript객체로 변환
            success: function (result) {   // 서버가 주는 데이터 : result
                // alert(result[0].title)      // 제목
                $.each(result, function (idx,item) {  // for문과 동일한 방식이다. 각각의 result에 대해 function을 수행
                    var tr = $("<tr></tr>")
                    var imgTd = $("<td></td>")
                    var img = $("<img \>").attr("src", item.img)  //<img src= ~~~>
                    imgTd.append(img)

                    var titleTd = $("<td></td>").text(item.title)
                    var authorTd = $("<td></td>").text(item.author)
                    var priceTd = $("<td></td>").text(item.price)

                    var delTd = $("<td></td>")
                    var delBtn = $("<input \>").attr({type :"button",value :"삭제"})
                    delBtn.on("click",function () {
                        // 현재 클릭된 버튼에 대한 책 정보를 찾아서 삭제.
                        // this : 현재 이벤트가 발생된 객체를 지칭.
                        $(this).parent().parent().remove()
                    }) // "(click)"할때 이벤트 처리(함수)
                    delTd.append(delBtn)

                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(delTd)

                    $("tbody").append(tr)
                })

            },
            error: function (error) {
                alert("서버호출 실패")
            }
        })
    }
}

function do_delete(){

}


