class BankAccountDetails
{
    constructor(accountNumber,accountHolderName,accountBalance)
    {
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
    deposite(amountToDeposite)
    {
        this.accountBalance=this.accountBalance+amountToDeposite;
        console.log("New Account Balance is :" +this.accountBalance)
    }
}

class Savings extends BankAccountDetails
{
    constructor(accountNumber,accountHolderName,accountBalance,isSalary)
    {
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary=isSalary;
    }
    withdraw(amountToWithdraw)
    {
        this.amountToWithdraw=this.accountBalance-amountToWithdraw;
        if(this.amountToWithdraw<=0)
        {
            console.log("Insufficient Balance !!!")
        }
        else
        {
            console.log("Withdrawal Amount is :" +amountToWithdraw +"Remaining Balance:" +this.amountToWithdraw);
            console.log("Amount Withdrawn Successfully");
        }
        
    }
}

class Current extends BankAccountDetails
{
    constructor(accountNumber,accountHolderName,accountBalance,odlimit)
    {
        super(accountNumber,accountHolderName,accountBalance);
        this.odlimit=odlimit;
    }
    withdraw(amountToWithdraw)
    {
        this.amountToWithdraw=this.accountBalance-amountToWithdraw;
        if(this.amountToWithdraw<0)
        {
            if((amountToWithdraw)>=(this.odlimit+this.accountBalance))
            {
                console.log("Insufficient Balance !!!");
            } 
        
        else
        {
            console.log("Withdrawal Amount is :" +amountToWithdraw +"Amount deducted from od is :" +this.amountToWithdraw);
            console.log("Amount Withdrawn Successfully");
        }
        
    }
    else{
        console.log("Withdrawal Amount is :" +amountToWithdraw +"Remaining Balance:" +this.amountToWithdraw);
        console.log("Amount Withdrawn Successfully");
    }
}
}
var savings =new Savings(21031556212,"unnati",20000,true);
var current=new Current(214521452,"Kanak",32000,200000);
Savings.deposite(3000);
Savings.withdraw(1000);
Current.deposite(3000);
Current.withdraw(600000);
