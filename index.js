var btn        =          document.querySelector('#btn');
var container  =          document.querySelector("#container");
var profile    =          document.querySelector("#profile");
var avatar     =          document.querySelector('#avatar');
var fullname   =          document.querySelector('#fullname');
var username   =          document.querySelector('#username');
var email      =          document.querySelector('#email');
var city       =          document.querySelector('#city');
var url        =          'https://randomuser.me/api/';
var x          =           window.matchMedia("(max-width: 700px)")



btn.addEventListener('click', function(){
  fetch(url)
  .then(parseJSON)
  .then(updateProfile)
.catch(function(err){
     document.write('too many requests - come back Later' + err);
   });

});
  
  


function updateProfile (data){
   fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => profile.innerText = json[1].body );
    //console.log(data);
    var name = data.name.first +"  "+data.name.last;
    fullname.innerText = name;   
    avatar.src = data.picture.medium;
    username.innerText = data.login.username; 
    city.innerText =data.location.city;
    email.innerText = data.email;
   container.style.backgroundImage = "url(" + data.picture.large + ")";
  
    
   

  }


function parseJSON(res){
  return res.json().then(function(parsedata){
    return parsedata.results[0];
    
  })
}


