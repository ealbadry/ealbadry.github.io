
class CheckingAccount extends Account{
	
	constructor(number, overdraftLimit)
	{
		super(number);
		this._overdraftLimit = overdraftLimit;
		
	}
	
	setDraftLimit(limitAmount){
		 this._overdraftLimit = limitAmount;
	}
	
	getDraftLimit(){
		return this._overdraftLimit;
	}
	
	withdraw(amount){
		super.withdraw(amount);
		
	}

	toString(){
		super.toString();
		return "Account " + this._number + '<br/>'+ " Over draft Limit = " + this._overdraftLimit; 
	}
}

function display() { 
	let acc1 = new CheckingAccount(4556, 100);
	
	document.getElementById("CheckingAccount").innerHTML = acc1.toString();
	  
	};
	window.onload = display();