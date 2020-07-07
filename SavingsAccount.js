
class SavingsAccount extends Account {
	
	constructor(intVariable)
	{
		super();
		this._variable  = intVariable;
	}
	
	getVariable() {
        return this._variable;
    }
	
	setVariable(variable) {
         this._variable = variable;
    }
	
	addInterest(interestAmount){
		let newBalance = super.getBalance() * interestAmount / 100;
		super.deposit(newBalance);
		return "New Balance after adding the Interest = " + super.getBalance();
	}
	
	 toString() {
		 super.toString();
	        return "Account " + this._number + '<br/>'+ " Variable = " + this._variable;
	    }

}


function display() { 
	let acc1 = new SavingsAccount(52557, 90);
	
	document.getElementById("savingsAccount").innerHTML = acc1.toString();
	  
	};
	window.onload = display();



	
