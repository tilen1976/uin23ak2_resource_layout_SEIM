//variable for nav titles
let navtitle = "";

//Loop through resources and store title in variables. Define id. onclick function.
resources.map(
    (item) => { navtitle += `<a href="#${item.category}"  id="${item.category}"  onclick="myFunction(this)">${item.category}</a>`}

)

//Display variable content
document.querySelector("#title").innerHTML = navtitle;

//function for retrieving data from category
function myFunction(e){
    
    document.querySelector("#headline").innerHTML = e.id;
    
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
    
            document.querySelector("#text").innerHTML = text;
            document.querySelector("#listSource").innerHTML = link;

        }
   );

}