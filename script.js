//Materinya bisa dilihat juga di w3schools.com, bagian Javascript HTML DOM

//document.getElementById("judul").innerHTML = "Belajar Javascript-HTML DOM";
var judul = document.getElementById("judul");
judul.innerHTML = "Belajar Javascript-HTML DOM";

//untuk tag name dan class name, jika ingin digunakan bisa menuliskan indeksnya
var h3 = document.getElementsByTagName("h3");
h3[0].innerHTML = "Bubbling(change by tag name)";
for (let i = 0; i < h3.length; i++) {
    h3[i].style.color = "navy";
}

//var p2 = document.getElementsByClassName("p2");
//p2[0].setAttribute("id", "paragraf2");

var p2 = document.getElementsByClassName("p2")[0];
p2.setAttribute("id", "paragraf2");

var ambilJudul = document.querySelectorAll("h2#judul");
p2.innerHTML = "Judulnya yaitu " + ambilJudul[0].innerHTML;

var ambilP2 = document.querySelector("p.p2");
document.getElementsByClassName("p3")[0].innerHTML = "Isi dari paragraf 2 yaitu : " + ambilP2.innerHTML;

document.write("thank you");

var link = document.getElementById("link");
link.href = "https://www.w3schools.com/js/js_htmldom_html.asp";
link.innerHTML = "w3 schools";

p2.style.color = "salmon";
p2.style.backgroundColor = "rgb(0,0,0)";

var li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    li[i].style.color = "brown";
    li[i].style.fontWeight = "bold";
}

function reset() {
    document.getElementsByTagName("form")[0].reset();
    reset();
}
li[0].setAttribute("onmouseover", "mOver(this)");
li[0].setAttribute("onmouseout", "mOut(this)");

function mOver(obj) {
    obj.innerHTML = "Properti : nilai yang bisa digunakan";
}

function mOut(obj) {
    obj.innerHTML = "Properti";
}

var event = document.getElementsByClassName("event")[0];
/*
event.onclick = function() {
    event.style.color = "brown";
}
event.onclick = function() {
    event.style.fontStyle = "italic";
}
*/
//jika ingin 2 event/lebih dalam 1 elemen, gunakan addEventListener
event.addEventListener('click', function() {
    event.style.color = "brown";
})
event.addEventListener('click', function() {
    event.style.fontStyle = "italic";
})

//condition false bisa dihapus untuk yang bubbling 
//default dari event propagation ini false -> bubbling
document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
}, false);
//untuk event propagation : capturing tinggal tulis conditionnya jadi true
document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
}, true);