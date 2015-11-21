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
    "<li><h1>alcoh·me</h1></li>",
    "<li><a id='home' href='#home'>Home</a></li>",
    "<li><a id='profile' href='#profile'>My Profile</a></li>",
    "</ul>"
  ].join(""),
  form: [
    "<form class='drinkform'>",
     "<input type='text' id='ingredientOne' class='ingredients' placeholder='optional ingredients'>",
     "<input type='text' id='ingredientTwo' class='ingredients' placeholder='optional ingredients' >",
     "<input type='text' id='ingredientThree' class='ingredients' placeholder='optional ingredients'>",
     "<input type='text' id='ingredientFour' class='ingredients' placeholder='optional ingredients'>",
     "<button class='send-stuff'>submit</button>",
   "</form>"
 ].join(""),
 sideUser: [
   "<li>",
   "<img src='http://www.fillmurray.com/460/300' />",
   "<h5><%= username %></h5>",
   "</li>"
 ].join(""),
 recipe: [
   "<article>",
   "<h3><%=name%></h3>",
   "<ul id='ingredientList'>",
   "</ul>",
   "<p></p>",
   "<button id='like'>I'd Drink That!</button>",
   "</article>"
 ].join(""),
 ingredient: [
   "<li>Ingredient Name</li>"
 ].join(""),
 login:[
   "<div class='box'>",

   "<h1 class='title'>alcoh·me</h1>",
   "<input class='username' placeholder='username'></input>",

   "<input type='password' class='password' placeholder='password'></input>",
   "<input class='photo' placeholder='photo'></input>",
   "<li><a id='submit' href='#home'>SUBMIT</a></li>",

   "</div>"
 ].join(""),

};
