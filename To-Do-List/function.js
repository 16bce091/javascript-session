//appendButton();
            function appendButton(){
              var x=document.getElementsByTagName("li");
              //console.log(x);
               for(var i=0;i<x.length;i++)
                 {
                     var del=document.createElement("span");
                     del.className="todel";
                     var button=document.createElement("button");
                     button.innerHTML="X";
                     del.appendChild(button);
                    
                     x[i].appendChild(del);
                      
                     
                       

                 }
            
                    

                    var del_button=document.getElementsByClassName("todel");
                    
                     for(var i=0;i<del_button.length;i++)
                      {
                            del_button[i].onclick=function(){
                                  var parent=this.parentElement;
                                  parent.style.display="none";
                            }
                      }


                     // var mark=document.getElementById("list");
                      //console.log(mark);
                      var list = document.querySelector('ul');
                       list.addEventListener('click', function(ev) {
                          // console.log(ev);
                           if (ev.target.tagName === 'LI') {
                              ev.target.classList.toggle('checked');
                                     }
                               }, false);}

                     
                     
                 function newEle(){
                       
                       var y=document.getElementById("item").value;
                       //console.log(y);
                       if(y=="")
                         {
                             window.alert("Please enter a text");
                         }

                         else
                          {
                              var ul=document.getElementById("list");
                               var li=document.createElement("li");
                               ul.append(li);
                               console.log(ul);
                          }   
                               li.className="mylist";
                               var yy=document.createTextNode(y);
                               li.appendChild(yy);
                               document.getElementById("item").value="";
                               //ul.append(li);

                              // appendButton();

                              var del=document.createElement("span");
                               del.className="todel";
                              var button=document.createElement("button");
                              button.innerHTML="X";
                              del.appendChild(button);
                                   
                              li.appendChild(del);
                              //ul.append(li);
                             
                    var del_button=document.getElementsByClassName("todel");
                    
                    for(var i=0;i<del_button.length;i++)
                     {
                           del_button[i].onclick=function(){
                                 var parent=this.parentElement;
                                 parent.style.display="none";
                           }
                     }
                              

                          
                 }