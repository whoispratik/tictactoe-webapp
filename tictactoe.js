let turncount = 1;
let crosspicker,circlepicker;
let circlecount=0,crosscount=0;
let totalclickcount=0;
let userform=document.forms.userform;
userform.elements.user1choice.addEventListener('change',changeEventtackler);
userform.elements.user2choice.addEventListener('change',changeEventtackler);
function changeEventtackler(e){
//console.log(e.target.selectedIndex);
if(e.target.getAttribute('name')=="user2choice"){

  if(e.target.selectedIndex==1){
    console.log(1);
    userform.elements.user1choice.selectedIndex=1;
  }
  else{
    console.log(0);
    userform.elements.user1choice.selectedIndex=0;
  }
}
else{
  
  if(e.target.selectedIndex==1){
    console.log(1);
    userform.elements.user2choice.selectedIndex=1;
  }
  else{
    console.log(0);
    userform.elements.user2choice.selectedIndex=0;
  }
}
}
userform.addEventListener('submit',function(e){
  
e.preventDefault();
/*
alert(`${document.getElementById('username1').value} and ${document.getElementById('username2').value}`);
alert(`${userform.elements.user1choice.value} and ${userform.elements.user2choice.value}}`)
*/
if(userform.elements.user1choice.value=='Cross'){
crosspicker=document.getElementById('username1').value;
circlepicker=document.getElementById('username2').value;
}
else{
circlepicker=document.getElementById('username1').value;
crosspicker=document.getElementById('username2').value;
}

//alert(`${crosspicker} is the crosspicker`);
//alert(`${circlepicker} is the circle picker`);
userform.remove();
document.body.innerHTML=`<p class='turnstatus'>${crosspicker}'s turn</p>`;
let table=document.createElement('table');
table.innerHTML=`<table>
<tr>
<td class="r12"></td>
<td class="r13"></td>
<td class="r14"></td>
</tr>
<tr>
<td class="r21"></td>
<td class="r22"></td>
<td class="r23"></td>
</tr>
<tr>
<td class="r31"></td>
<td class="r32"></td>
<td class="r33"></td>
</tr>
</table>`;
document.body.append(table);
table.addEventListener("click", tdclick);
})
//console.log(userform.innerHTML);
function stopbubbling(e) {
  e.stopPropagation();
}

function tdclick(e){
  if (e.target.tagName == "TD") {
    console.log("oi");
    if (turncount % 2 == 0) {
e.target.setAttribute('shape','circle');
      e.target.innerHTML = "<span class='circle'></span>";
      turncount++;
    
     document.querySelector(".turnstatus").innerText=`${crosspicker}'s turn`;
      
    } else {
      e.target.setAttribute('shape','cross');
      e.target.innerHTML = "<span class='cross'></span>";
      turncount++;
     
     document.querySelector(".turnstatus").innerText=`${circlepicker}'s turn`;
    }
  e.target.addEventListener('click',stopbubbling);
  }
  totalclickcount++;
  resultLogic(totalclickcount);
}

function resultLogic(clickcount) {
  let winArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let tabletds=document.querySelectorAll('table td');
  for(let i=0;i<winArray.length;i++){
   let[a,b,c]=winArray[i];
  if((tabletds[a].hasAttribute('shape') && tabletds[b].hasAttribute('shape') && tabletds[c].hasAttribute('shape'))&&(tabletds[a].getAttribute('shape')==tabletds[b].getAttribute('shape') && tabletds[a].getAttribute('shape')==tabletds[c].getAttribute('shape') && tabletds[b].getAttribute('shape')==tabletds[c].getAttribute('shape'))){
if(tabletds[a].getAttribute('shape')=='cross'){
  document.querySelector(".turnstatus").innerText=`${crosspicker} wins`;
document.querySelector('table').remove()
}
else{
  document.querySelector('.turnstatus').innerText=`${circlepicker} wins`;
  document.querySelector('table').remove();
}
  }
  }
  
  if(clickcount==9){
  document.querySelector(".turnstatus").innerText=`Nobody wins`;
    document.querySelector('table').remove();
  }
}

