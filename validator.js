function ev(){
 	if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(myForm.emailAddr.value))
  	{	
    		alert("You have entered an invalid email address!")
    		return (false)
  	}
}
function pv(){
	var y=document.form1.pn.value;
	b=y.length;
	if(b<10||b>10)
	alert("Enter Correct Phone Number");
}
function pass(){
	var z=document.form1.pa.value;
	c=z.length;
	var sc=[".",":",";","!","@","*","/"];
	sc.sort();
	var c=z.length;
	for(i=0;i<c;i++){
		for(j=0;j<c;j++){
			if(z[i]===sc[j]){
				var e=1
				break;
			}
		}
	}
	for(i=0;i<c;i++){
		if(!isNaN(z[i])){
			n=1;
			break;
		}
	}
	if(z<=8||e!=1||n!=1){
		alert("Password Must Contain at least 1 .,!,@,* and must be at least charecter long and contail one number");
		return false;
	}
	else if(c>16)
		alert("Password too long");

}