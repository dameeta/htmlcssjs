function register(){

    var name=document.forms["RegForm"]["Name"];
    var address=document.forms["RegForm"]["Address"];
    var email=document.forms["RegForm"]["Email"];
    var password=document.forms["RegForm"]["Password"];
    var mobileno=document.forms["RegForm"]["MobileNo"];
    var course=document.forms["RegForm"]["Course"];
if(name.value =="")
{
 window.alert("Please enter your name");
 name.focus();
 return false;

}
if(address.value =="")

{
    window.alert("Please enter your address");
    address.focus();
    return false;
   
 }
 if(email.value =="")

 {
    window.alert("Please enter your email");
    email.focus();
    return false;
   
   }
   if(mobileno.value =="")
{
    window.alert("Please enter your Phone");
    mobileno.focus();
    return false;
}

   if(password.value =="")
   {
    window.alert("Please enter your email");
    password.focus();
    return false;
}
   if(course.selectedIndex <1){
    alert("Please enter your course");
    course.focus();
    return false;
   }

   return true;
}


