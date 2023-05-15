// var vid = document.getElementById("video");
// vid.ontimeupdate = function(){
//   var percentage = ( vid.currentTime / vid.duration ) * 100;
//   $("#custom-seekbar span").css("width", percentage+"%");
// };

// $("#custom-seekbar").on("click", function(e){
//     var offset = $(this).offset();
//     var left = (e.pageX - offset.left);
//     var totalWidth = $("#custom-seekbar").width();
//     var percentage = ( left / totalWidth );
//     var vidTime = vid.duration * percentage;
//     vid.currentTime = vidTime;
// });//click()

const buttons = document.querySelectorAll(".show-hide-text");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("show-paragraph");
    // console.log(e.target.nextElementSibling.classList);
    // document.querySelector(`${e.target.parentNode.tagName} > article`).classList.toggle("show-paragraph");
  });
});