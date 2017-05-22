var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
 var content= document.getElementById("01");
 var img= document.createElement("img");
 img.setAttribute("src", pictures[0]);
 img.setAttribute("class", "imagen");
 content.appendChild(img);
