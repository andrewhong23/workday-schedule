var timeDisplayEl = $("#currentDay")


function displayTime() {
    var currentTime = moment().format('dddd, MMM, Do');
    timeDisplayEl.text(currentTime);

};
displayTime();


function checkHour() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {

        var hour = parseInt($(this).attr("id"))
        // console.log(this)

        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }

    })

}

checkHour();

$(".saveBtn").on("click", function(){
    console.log($(this).siblings(".description").val())
    var textArea = $(this).siblings(".description").val()
    localStorage.setItem($(this).siblings(".description").attr("id"), textArea)
});

$("#nine").val(localStorage.getItem("nine"))
$("#ten").val(localStorage.getItem("ten"))
$("#eleven").val(localStorage.getItem("eleven"))
$("#twelve").val(localStorage.getItem("twelve"))
$("#thirteen").val(localStorage.getItem("thirteen"))
$("#fourteen").val(localStorage.getItem("fourteen"))
$("#fifteen").val(localStorage.getItem("fifteen"))
$("#sixteen").val(localStorage.getItem("sixteen"))
$("#seventeen").val(localStorage.getItem("seventeen"))
