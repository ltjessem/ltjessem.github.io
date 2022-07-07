// Do not mess with this file unless you know what you're doing :P

$(document).on('click', 'a[href^="#"]', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
});

// This is for the click to copy
let t;
$(document).ready(()=>{
	t = $(".ip").html();
})
$(document).on("click",".ip",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = t;
	copy.select();
	document.execCommand("copy");
	$(".ip").html("<span class='extrapad'><font color=#55FFFF>Copied to clipboard!</font></span>");
	setTimeout(function(){
		$(".ip").html(t);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
});


let u;
$(document).ready(()=>{
  u = $(".ipb").html();
})
$(document).on("click",".ipb",()=>{
  let copy = document.createElement("textarea");
  copy.style.position = "absolute";
  copy.style.left = "-99999px";
  copy.style.top = "0";
  copy.setAttribute("id", "ta");
  document.body.appendChild(copy);
  copy.textContent = u;
  copy.select();
  document.execCommand("copy");
  $(".ipb").html("<span class='extrapad'><font color=#55FFFF>Copied to clipboard!</font></span>");
  setTimeout(function(){
    $(".ipb").html(u);
    var copy = document.getElementById("ta");
    copy.parentNode.removeChild(copy);
  },1000);
});
