var savings = {
    accountNumber:87456214,
    accountHolderName:"Unnati Vijendra Gore",
    accountBalance:100000,
    isSalary:true,
    withdraw(amount){

        if(amount<=this.accountBalance){
            this.accountBalance-=amount;
        
        }else{
            console.log("Insufficient balance");
        }
        
    },
    getCurrentBalance(){
        console.log(this.accountBalance);
    }
    
}

var current ={
accountNumber:87456214,
accountHolderName:"Unnati Vijendra Gore",
accountBalance:100000,
odLimit:60000,  
withdraw(amount){

    var limit=parseInt(this.accountBalance+this.odLimit);
    console.log(limit);
    if(amount<=limit){
        this.accountBalance-=amount;
    
    }else{
        console.log("Insufficient balance");
    }
    
},
getCurrentBalance(){
    console.log(this.accountBalance);
}
}


//   function withdraw(amount){

//     if(amount<savings.accountBalance){
//         savings.accountBalance-=amount;
//         console.log(savings.accountBalance);
//     }

//   }

savings.withdraw(600);
savings.getCurrentBalance();

current.withdraw(61000);
current.getCurrentBalance();