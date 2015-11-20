module.exports = {
  profile: [
    "<div class='profile'>",
    "<ul>",
    "<li><h2>User Name</h2></li>",
    "<li><img src='http://www.fillmurray.com/460/300' /></li>",
    "</ul>",
    "<h4>Favorite Recipes</h4>",
    "<section id='recipes'>",
    "</section>",
    "</div>"
  ].join(''),
  navigation: [
    "<ul id='nav'>",
    "<li><h1>Alchemy</h1></li>",
    "<li><a id='home' href=''>Home</a></li>",
    "<li><a id='profile' href=''>My Profile</a></li>",
    "</ul>"
  ].join(""),
  form: [
    "<form class='movieform'>",
     "<input type='text' id='liquor' class='title' placeholder='What liquor do you have?'>",
     "<input type='text' id='ingredientOne' class='ingredients' placeholder='optional ingredients'>",
     "<input type='text' id='ingredientTwo' class='ingredients' placeholder='optional ingredients' >",
     "<input type='text' id='ingredientThree' class='ingredients' placeholder='optional ingredients'>",
     "<button class='send-stuff'>submit</button>",
   "</form>"
 ].join(""),
 sideBar: [
   "<aside>",
   "<ul id='sideBar'>",
   "</ul>",
   "</aside>"
 ].join(""),
 sideUser: [
   "<li>",
   "<img src='http://www.fillmurray.com/460/300' />",
   "<h5>Friend Name</h5>",
   "</li>"
 ].join(""),
 recipe: [
   "<article>",
   "<h3>Drink Name</h3>",
   "<ul id='ingredientList'>",
   "</ul>",
   "<p></p>",
   "<button id='like'>I'd Drink That!</button>",
   "</article>"
 ].join(""),
 ingredient: [
   "<li>Ingredient Name</li>"
 ].join(""),

}
