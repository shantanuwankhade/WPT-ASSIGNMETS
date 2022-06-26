//Assignment 3

class Valuee
{
constructor(status,itemobject){
    this.status=false;
    this.itemobject=itemobject;
    }
};




class Item {
    constructor(itemno, price, qty){
        this.itemno = itemno;
        this.price = price;
        this.qty = qty;
    }

    setItemDetails(itemno,price,qty){
        this.itemno =itemno;
        this.price=price;
        this.qty=qty;
    }

    getItemDetails(){
        return this.itemno +  "--" + this.price + "--"  + this.qty;	
    }
};




class Logic {
    constructor(){
        this.items = [new Item(1,4,5),
            new Item(2,6,7),
            new Item(3,9,10),
            new Item(41,123,133)];
    }

    addItem(itemno, price, qty){
        this.items.push(new Item(itemno, price, qty));
    }

    getItemDetailsLogic(itemno){
        let output =new Valuee(false,{});
        for(let i=0; i < this.items.length; i++){
            if(this.items[i].itemno == itemno ){	
                output.result=true;
                output.itemdetails=this.items[i];
                break;
            }
        }
        return output;
    }

    updateItemDetailsLogic(updateditem){
        console.log(updateditem.itemno);
        let output =false;
        for(let i=0; i < this.items.length; i++){
            if(this.items[i].itemno == updateditem.itemno ){	
                this.items[i].setItemDetails(updateditem.itemno,updateditem.price,updateditem.qty);
                output=true;
                break;
            }
        }
        console.log("inside update function" + output);
        return output;
    }

    removeItemDetailsLogic(itemno){
        let output =false;
        for(let i=0; i < this.items.length; i++){
            if(this.items[i].itemno == itemno ){	
                this.items.splice(i,1); // which position, how many elements to remove
                output=true;
                break;
            }
        }
        console.log("inside delte function" + output);
        return output;
    }

    getAllItems(){
        return this.items;
    }
};

function showAllItems(logic){
    console.log("show all items");
	let output=logic.getAllItems();
	let msg="";
	for(let i=0; i < output.length; i++){//dinosaur way..
        msg+= "<Br/>" + output[i].itemno +  " --- " + output[i].price +"--"+ output[i].qty;
	    document.querySelector("#contents").innerHTML=msg;
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', ()=>{
    let logic = new Logic();
    showAllItems(logic);
    console.log(logic);

    const itemnoid = document.querySelector("#itemno");                    //input value
        itemnoid.addEventListener('blur',()=>{
        console.log("blur event");

        let itemno= document.querySelector("#itemno").value;
        console.log("input is" + itemno);
        let output= logic.getItemDetailsLogic(itemno);
        console.log(output);
        if(output.result){
            document.querySelector("#price").value=output.itemdetails.price;
            document.querySelector("#qty").value=output.itemdetails.qty;	
			
            document.querySelector("#update").disabled=false;
            document.querySelector("#delete").disabled=false;
            document.querySelector("#add").disabled=true;
			
            document.querySelector("#msg").innerText="item details found";
        } 
		
		else {
            console.log("no item was found");
            document.querySelector("#update").disabled=true;
            document.querySelector("#delete").disabled=true;
			
            document.querySelector("#msg").innerText="item no not found";
            document.querySelector("#price").value="";
			
            document.querySelector("#qty").value="";
        }
    });

    document.querySelector('#add').addEventListener('click',()=>{
        console.log("add clicked");
        console.log("Before push"+logic.items);
        let itemno = document.querySelector('#itemno').value;
        let price = document.querySelector('#price').value;
		
        let qty = document.querySelector('#qty').value;
		
		
        logic.items.push(new Item(+itemno, +price, +qty));
        console.log(logic.items);
        showAllItems(logic);
    })

    document.querySelector('#delete').addEventListener('click',()=>{
		
        let input= document.querySelector("#itemno").value;
        console.log(input);
		
        let output=logic.removeItemDetailsLogic(input);
        console.log("after delte function" + output);
		
        if(output) {
            document.querySelector("#msg").innerText="delete suceeded bravery";
            document.querySelector("#update").disabled=true;
            document.querySelector("#delete").disabled=true;
            document.querySelector("#itemno").value="";
            document.querySelector("#price").value="";
            document.querySelector("#qty").value="";
        }

		else {
            document.querySelector("#msg").innerText="delete failed";
            document.querySelector("#update").disabled=true;
            document.querySelector("#delete").disabled=true;
            
        }
        showAllItems(logic);
    })

    document.querySelector('#update').addEventListener('click', () => {
		
        let input = {
            itemno: document.querySelector("#itemno").value,
            price: document.querySelector("#price").value,
            qty: document.querySelector("#qty").value
        };

        console.log(input);
		
        let output = logic.updateItemDetailsLogic(input);
        
        if (output) {
            document.querySelector("#msg").innerText = "update suceeded";
			
            document.querySelector("#update").disabled = true;
            document.querySelector("#delete").disabled = true;
			
            document.querySelector("#itemno").value = "";
            document.querySelector("#price").value = "";
            document.querySelector("#qty").value = "";
			
        }
		
        else {
            document.querySelector("#msg").innerText = "update failed";
            document.querySelector("#update").disabled = true;
			
            document.querySelector("#delete").disabled = true;
        }
        showAllItems(logic);
    })
});