
//variable for titler i nav
let navtitle = "";

//hente ut tittel og legge i variabel. trim() for å fjerne whitespace
//Definere en id og legge til function på onClick
resources.map(
    (item) => { navtitle += `<a href="#${item.category.trim()}"  id="${item.category}"  class="defaultStyle" onClick="myFunction(this)">${item.category.trim()}</a>`}

)



//noe onload?

//Vise innhold i dokument
document.querySelector("#title").innerHTML = navtitle;

//Funksjon som henter ut info om hver kategori
function myFunction(e){
    
    document.querySelector("#headline").innerHTML = e.id;

    
    let text = "";
    let link = "";

   resources.map(
        (item) => {

            //kilde student Stine
            let elements = document.querySelectorAll(".defaultStyle");
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.remove("styleChange");
            }
             
        
            let element = document.getElementById(e.id)
        
            element.classList.add("styleChange")
           
        if(item.category === e.id){
            text += `${item.text}`,
            item.sources.map(
                (item) => {
                  link += `<li><a href="${item.url}">${item.title}</a></li>` 
                }
               
            )
        };
    
            document.querySelector("#text").innerHTML = text;
            document.querySelector("#listSource").innerHTML = link;


        }
   );
  
   
}