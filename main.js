/*Reverse the given number */

let num = (n)=>{
	let b,
	sum=0;
	  
	  while(n>0){
		  b=n%10;
		  sum=sum*10+b;
		  n=parseInt(n/10);
	  }	
  
	  console.log(`Reverse of the number is ${sum}`);
	}
	(num(691))  