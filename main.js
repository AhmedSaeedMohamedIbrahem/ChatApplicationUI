var CreateAndJoinTheGroup = document.querySelector('#CreateAndJoinTheGroupDiv');
var Chat = document.querySelector('#ChatDiv');



function JoinTheGroupFunction() {
   var GroupName = document.querySelector('#GroupNameText').value;
   var MemberName = document.querySelector('#YourNameText').value;

   let group = validategroupName(GroupName);
   let name = validateName(MemberName);

   console.log(group);
   console.log(name);

   if (!confirm("Are you sure ?")) {
       return
   } else {
      CreateAndJoinTheGroup.style.display = 'none';
      Chat.style.display = "block";

       storeLocalStrorage(name);

   }
   tIMER();
}

function storeLocalStrorage(){

   console.log('local storage');
}

function validateName(name) {
   if (name === null || name.length === 0 || name.replace(/^\s+|\s+$/gm, '') == "" || Boolean(name) === false) {
       alert('enter your name');

   } else {
       return name;
   }
}

function validategroupName(groupNam) {
   if (groupNam === null || groupNam.length === 0 || groupNam.replace(/^\s+|\s+$/gm, '') == "" || Boolean(groupNam) === false) {
       alert('enter your group name');

   } else {
       return groupNam;
   }
}

function logout() {
   firstScreen.style.display = 'block';
   scecondScreen.style.display = "none";

   //UnsubToPusherChannel();
}

function Join() {
   var groupInp = document.querySelector('#group-name-inp').value;
   var nameInp = document.querySelector('#name-inp').value;

   let group = validategroupName(groupInp);
   let name = validateName(nameInp);

   console.log(group);
   console.log(name);
   if (!confirm("Are you sure ?")) {
       return
   } else {
       firstScreen.style.display = 'none';
       scecondScreen.style.display = "block";

       storeLocalStrorage(name);

   }
   tIMER();
}

function tIMER() {
   var oneminute = 60 * 1,
       display = document.querySelector('#time');

   startTimer(oneminute, display);
};
function startTimer(duration, display) {
   var timer = duration,
       minutes, seconds;
   setInterval(function () {
       minutes = parseInt(timer / 60, 10);
       seconds = parseInt(timer % 60, 10);

       seconds = seconds < 10 ? "0" + seconds : seconds;

       display.textContent = seconds;

       if (--timer < 0) {
           //clearInterval(timer);
           //display.textContent ="00:00";

           logout();
       }

   }, 1000);
}

const out = document.getElementById("out")
let c = 0

setInterval(function() {

   var element = document.getElementById('out');

   element.scrollTop = element.scrollHeight;
 
}
)

function format () {
  return Array.prototype.slice.call(arguments).join(' ')
}

function AddingNumberFunction()
{
   var FirstVar = parseInt(document.getElementById("FirstValue").value);
   var SecondVar = parseInt(document.getElementById("SecondValue").value);
   if (isNaN(FirstVar) || isNaN(SecondVar)) 
   {
    alert("The value must be a number");
   }

   var resultVar = FirstVar + SecondVar; 
   document.getElementById("Result").value = resultVar;
   console.log(resultVar)
}
function logout() {
   CreateAndJoinTheGroup.style.display = 'block';
   Chat.style.display = "none";
   //localStorage.removeItem("key");
  // UnsubToPusherChannel();
}