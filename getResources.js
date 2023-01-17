//variables 
let navtitle = "";

let listElement = "";

//Loop through resources and store title in variables
//window onload her?
resources.map(
    (item) => { navtitle += `<a href="#${item.category}"  id="${item.category}"  onclick="myFunction(this)">${item.category}</a>`}

)

//Display variable content
document.getElementById("title").innerHTML = navtitle;

//function for button to get all info from object
function myFunction(e){
    
    document.getElementById("headline").innerHTML = e.id;


    let text = "";
    let link = "";

   resources.map(
        (item) => {
        if(item.category === e.id){
            text += `${item.text}`,
            item.sources.map(
                (item) => {
                  link += `<li><a href="${item.url}">${item.title}</a></li>` 
                }
               
            )
        };
            document.getElementById("text").innerHTML = text;
            document.getElementById("listSource").innerHTML = link;

        }
   );

}