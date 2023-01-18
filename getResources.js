//variable for nav titles
let navtitle = "";

//Loop through resources and store title in variables
resources.map(
    (item) => { navtitle += `<a href="#${item.category}"  id="${item.category}"  onclick="myFunction(this)">${item.category}</a>`}

)

//Display variable content
document.querySelector("#title").innerHTML = navtitle;

//function for button to get all info from object
function myFunction(e){
    
    document.querySelector("#headline").innerHTML = e.id;
    //document.querySelector(a).style.backgroundColor = "#25DFE6";   

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


/*function activeNav(){
    document.querySelector("#").classList.toggle("hidden");
}*/
/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/