let navtitle = "";

/*hente ut tittel og legge i variabel.
  Definere en id og legge til function på onClick*/
resources.map(
    (item) => { 
        navtitle += `<a href="#${item.category}"  
        id="${item.category}"  class="defaultStyle" 
        onClick="myFunction(this)">${item.category}</a>`
    }
);

document.querySelector("#title").innerHTML = navtitle;


/*Funksjon som henter ut info om hver kategori
  Endrer style på anchor tag
  Legger til border på main
*/
function myFunction(e){
    
    document.querySelector("#headline").innerHTML = e.id;
 
    let text = "";
    let link = "";

   resources.map(
        (item) => {

            /*De tre neste kodelinjene har jeg funnet hjelp hos gruppa mi, A-team, 
            og kan derfor ligne på de andres løsning akkurat her*/
           let elements = document.querySelectorAll(".defaultStyle");

            for(let i = 0; i < elements.length; i++){
                elements[i].classList.remove("styleChange");
            }
             
        
            let element = document.getElementById(e.id);
            
            element.classList.add("styleChange");
  
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
            document.querySelector("main").classList.add("showMain");
        }
        
   ); 
}