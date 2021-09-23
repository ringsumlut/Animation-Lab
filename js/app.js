//A build-in for all the elements (go from nothing on the screen, to everything visible)
let everything = document.getElementsByClassName("container");

for (let i = 0; i < everything.length; i++) {
    TweenLite.from(everything[i], { duration: 3, y: -1000, alpha: 0, delay: 1 });

}

// Main Div animation
$(".mainBox").each(function () {
    this.animated = new TimelineMax({ paused: true });
    this.animated.to(this, { width: 400, backgroundColor: "#92278f" });

    $(this).click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            this.animated.reverse();
        }
        else {
            $(this).addClass('active');
            this.animated.play();
        }
    });
});

$('.boxC').click(function () {

    TweenLite.to(everything, { duration: 3, y: -1000, alpha: 0, delay: .5 });

    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";

    btn.addEventListener("click", function () {

        alert("Refresh the page to start again");
    });

    document.body.appendChild(btn);

});

