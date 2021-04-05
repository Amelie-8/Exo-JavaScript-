console.log("hello world");

var produit = 0;
var produitEl=
document.getElementById("produit")
{
    function plus(){
        produit++;
        produitEl.value=produit;
    }
    function minus(){
        if(produit>1){
            produit--;
            produitEl.value=produit;
        }
    }
}


for (const miniature of miniatures) {
    miniature.addEventListener('click', function() {
    photo.setAttribute("src", miniature.getAttribute("src"));
  })
}