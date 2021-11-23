card1 = document.getElementsByClassName("card1")[0]
card2 = document.getElementsByClassName("card2")[0]
function cardShadowOn(){
    card1.style.boxShadow=" 0 8px 32px 0 rgba( 31, 38, 135, 0.37)";
    card1.style.transform = "rotateZ(-7deg)"
}
function cardShadowOff(){
    card1.style.boxShadow="none";
    card1.style.transform = "rotateZ(7deg)"

}