var userName ='zahra';


alert ('hi'+ userName);

alert ('enjoy our albums');


document.write('<h3>'+userName+'</h3>')

var opinion=prompt('do you like our website?');

console.log(opinion);



if(opinion =='yes'){
document.write('<img src="https://ideas.hallmark.com/wp-content/uploads/2020/08/WTW_ThankYouCards.jpg" width="250px">');
}else if(opinion==='no'){
  document.write('<img src="https://image.shutterstock.com/image-vector/thank-you-visiting-us-vector-260nw-1214737042.jpg" width="250px">');
}


function selectAlbum(){
var bestAlbum=prompt('Which album do you prefer the most one big family by maher-zain or kon anta by hoomd-alkhader?');
while (bestAlbum !== 'one big family by maher-zain' && bestAlbum !== 'kon anta by hoomd-alkhader'){
  bestAlbum= prompt ('please answer with one big family by maher-zain or kon anta by hmood-alkhader');

}
var result='';

if (bestAlbum =='one big family by maher-zain') {
  
  result='<img src="https://i.ytimg.com/vi/ksdl5KQpLXY/hqdefault.jpg" width="250px">'; 
} else if (bestAlbum ==='kon anta by hoomd-alkhader' ) {console.log("77")
result='<img src="https://i.ytimg.com/vi/RaHxjA3mxiQ/maxresdefault.jpg" width="250px">'; 
}
return result;

}
var img = selectAlbum()
console.log(img);
document.write(img);





var gitrating=function(){


var heart= prompt('Kindly rate us with heart how many heart do you rate our website?')

if (heart>5) {
  heart=5;

}

var heartResults='';


for (var i=0;i<heart;i++) {

 heartResults +='<img src="https://i.pinimg.com/564x/0b/d9/f9/0bd9f9bb8c40d6552554c361e31fa27c.jpg" width="80px">';
}

return heartResults;

  }

  document.write(gitrating());