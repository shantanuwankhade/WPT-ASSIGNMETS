//First Assignment

window.addEventListener('DOMContentLoaded', ()=>{
	
	
    document.getElementById('add').disabled = true;
	
    document.getElementById('remove').disabled = true;
    document.getElementById('view').disabled = true;
    document.getElementById('modify').disabled = true;
    document.getElementById('odd').disabled = true;
	
	

    let arr = [1,2,3,4,5,6,7,8,9,10];


    function search (num) {
     for (let i = 0; i < arr.length; i++){
            if (arr[i] == num){
				
                return i;
            }
        }
        return -1;
    }
	

    function view(){
        let printArray = "Current array is: ";
        for (let i = 0; i < arr.length; i++){
			
			
            printArray += arr[i] + " ";
        }
        return printArray;
    }

    function add(num) {
        arr.push(num);
    }

    function checkOdd(){
        let printArray = "Current array is: ";
        for (let i = 0; i < arr.length; i+=2){
            printArray += arr[i] + " ";
        }
        return printArray;
    }
	
	
	
	
	

    document.querySelector('#input').addEventListener('blur', ()=>{
        console.log('Blur event called');
        // console.log(document.querySelector('#input').value);
        let input = document.querySelector('#input').value;
        if (search(+input) >= 0){
            document.getElementById('add').disabled = true;
            document.getElementById('remove').disabled = false;
            document.getElementById('view').disabled = false;
            document.getElementById('modify').disabled = false;
            document.getElementById('odd').disabled = true;
            document.querySelector('#status').innerText = "Number present in array"; }

			else {
            document.getElementById('add').disabled = false;
            document.getElementById('remove').disabled = true;
            document.getElementById('view').disabled = true;
            document.getElementById('modify').disabled = true;
            document.getElementById('odd').disabled = false;
            document.querySelector('#status').innerText = "Number not present in array";
        }
    });

    document.querySelector('#add').addEventListener('click',()=>{
       
        document.getElementById('add').disabled = true;
        let input1 = document.querySelector('#input').value;
        add(+input1);
        document.querySelector('#status').innerText = "Number added to array";
        document.getElementById('view').disabled = false;
    });
    document.querySelector('#remove').addEventListener('click',()=>{
        
        confirm(`Do you want to remove ${input}`);
        arr.splice(search(input), 1);
        document.querySelector('#status').innerText = "Number removed from array";
    });
    document.querySelector('#modify').addEventListener('click',()=>{
        
        let newValue = prompt("Enter new number: ");
        arr[search(input)] = newValue;
        document.querySelector('#status').innerText = `Number modified to ${newValue}`;
    });
    document.querySelector('#view').addEventListener('click',()=>{
        
        document.querySelector('#output').innerHTML = view();
        document.querySelector('#status').innerText = "";
    });
    document.querySelector('#odd').addEventListener('click', ()=>{
       
        document.querySelector('#output').innerHTML = checkOdd();
        document.querySelector('#status').innerText = "";
    })

    console.log(view());

});