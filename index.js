var btn = document.querySelector('#btn');
var avatar = document.querySelector('#avatar');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var url = 'https://randomuser.me/api/';

btn.addEventListener('click', function(){
   fetch(url)
  .then(parseJSON)
  .then(updateProfile)
  .catch(function(err){
     alert('error');
   });
});

function updateProfile (data){
    console.log(data);
    var name = data.name.first +"  "+data.name.last;
    fullname.innerText = name;   
    avatar.src = data.picture.medium;
    username.innerText = data.login.username; 
    city.innerText =data.location.city;
    email.innerText =data.email;

  }


function parseJSON(res){
  return res.json().then(function(parsedata){
    return parsedata.results[0];
    
  });
}