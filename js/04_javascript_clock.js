function start_clock() {
    // alert("버튼이 클릭되었습니다.")
    // 시계를 출력해야한다.
    // 현재 시간을 구한다.
    // 현재날짜의 시분초를 구한다.
    // 이 시간을 HTML 특정 영억에 입력한다.
    // 위의 작업을 1초마다 반복한다.

    setInterval(function () {
        var today = new Date()  // 날짜 객체 생성.
        console.log(today.toLocaleString())
        var my_div = document.getElementById("myDir")
        my_div.innerText = today.toLocaleString()
        var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        $("div").css("color", colorCode)
    }, 1000)
}
