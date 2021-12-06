
let 
web3;
const my_add = "0xb613b6dA8e29e4A7557aF5F8cc38e49f4C489D69"

const initialize = async ()=>{
    if(typeof window.ethereum !== 'undefined'){
        await connectWallet();
    }else {
        console.log("error in connection");
    }
}

async function connectWallet(){
    web3 = new Web3(Web3.givenProvider);
    await Web3.givenProvider.enable();
    web3.eth.getAccounts(async (er, acc) =>{
        if(er){
            console.log("please Use Metamask");
        }
        const payer = acc[0];
        const am = web3.utils.toWei("0.1", 'ether');
        console.log("this is ether",am);
        web3.eth.sendTransaction({
            from : payer,
            to : my_add,
            value : am
        })
    });
}



$('#pay__eth').click(()=>{
    initialize();
});