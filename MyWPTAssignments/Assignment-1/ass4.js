//Assignment 04

class data { 


    constructor() {

        this.employees = [
            { 
                empno: 1, 
                empname: "Anuj",
                email: "a1@12",
                deptid: 1
            },
			
            { 
                empno: 2, 
                empname: "Ashok", 
                email: "a2@12", 
                deptid: 2 
            },
			
            { 
                empno: 3, 
                empname: "Radha", 
                email: "a3@12", 
                deptid: 3 
            },
			
			
            { 
			
                empno: 4, 
                empname: "Mrudula", 
                email: "a4@12", 
                deptid: 1 
            }];

    }

    getdetails(empno) {
        let output = {};
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].empno == empno) {
                return this.employees[i];
            }
        }
		
    }
	
	

    getadddetails(empno1) {
        let empname1 = document.querySelector("#empname").value
        let email1 = document.querySelector("#email").value
        let deptid1 = document.querySelector("#deptid").value


        let output = false;
        let i = 0;
        while (i < this.employees.length) {
            if (this.employees[i].empno == empno1) {
                console.log("ENtered for loop");
                return this.employees[i];
            } i++;
        }
        if (i == this.employees.length) {
            this.employees.push({ empno: empno1, empname: empname1, email: email1, deptid: deptid1 })
            return output;
        }
        return output;
    }
	
	

    removeelement(input) {
        let output = { status: false }
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].empno == input) {
                console.log("ENtered if block");
                this.employees.splice(i, 1);
                output.status = true;
                break;
            }
        }
        return output;
    }
	
	

    viewallempdetailslogic() {
        let msg = "";
        for (let i = 0; i < this.employees.length; i++)
            msg += "<Br/>" + this.employees[i].empno + " --- " + this.employees[i].empname +
                "--" + this.employees[i].email + "--" + this.employees[i].deptid;

        document.querySelector("#msg1").innerHTML = msg;
    }




    getonDeptidLogic(deptid) {
        let i = 0;
        let msg = "";
        for (i = 0; i < this.employees.length; i++) {
            if (this.employees[i].deptid == deptid) {
                msg += "<Br/>" + this.employees[i].empno + " --- " + this.employees[i].empname +
                    "--" + this.employees[i].email + "--" + this.employees[i].deptid;
            }


        }
        return msg;
    }
}


window.addEventListener("DOMContentLoaded", () => {
    let all = new data();
    console.log("dom loaded");

    const empnoid = document.querySelector("#empno")
    empnoid.addEventListener('blur', () => {
        console.log("blur loaded");
        let input = document.querySelector("#empno").value;
        let output = all.getdetails(input);
        console.log(output);
        if (output) {
            console.log("item found" + output.empname)
            document.querySelector("#empno").value = output.empno;
			
            document.querySelector("#empname").value = output.empname;
            document.querySelector("#email").value = output.email;
			
            document.querySelector("#add").disabled = true;
        }
        else {
            document.querySelector("#msg").innerHTML = "Item not found";
			
            document.querySelector("#email").value = "";
            document.querySelector("#deptid").value = "";
			
            document.querySelector("#add").disabled = false;
        }
        console.log("blur event ended");
    });

    const addid = document.querySelector("#add");
    addid.addEventListener('click', () => {
        console.log("add event clicked");
        let input = document.querySelector("#empno").value;
        let output = all.getadddetails(input);

        if (!output) {
            document.querySelector("#msg").innerHTML = "Item added";
            document.querySelector("#empno").value = "";
			
            document.querySelector("#empname").value = "";
			
            document.querySelector("#email").value = "";
            document.querySelector("#deptid").value = "";

        }
    });

    const modifyid = document.querySelector("#modify");
    modifyid.addEventListener('click', () => {
        let input = document.querySelector("#empno").value;
        let output = all.getdetails(input);

        if (output) {
            output.empname = document.querySelector("#empname").value;
            output.email = document.querySelector("#email").value;
            output.deptid = document.querySelector("#deptid").value;
			
            document.querySelector("#msg1").innerText = "Modified"
            document.querySelector("#empno").value = "";
            document.querySelector("#empname").value = "";
            document.querySelector("#email").value = "";
			
            document.querySelector("#deptid").value = "";
            console.log("Edit sucessfull");
            document.querySelector("#modify").disabled = false;
			
            document.querySelector("#msg").innerText = "Modifed Sucessfully";
            all.viewallempdetailslogic();
        }
        else {
            console.log("empno not found");
        }
    });


    const removeid = document.querySelector("#remove");
    removeid.addEventListener('click', () => {
        let input = document.querySelector("#empno").value;
        let output = all.removeelement(input);
		

        if (output) {
            document.querySelector('#msg').innerText = "Employee Deleted";
            document.querySelector('#add').disabled = false;
			
            document.querySelector('#modify').disabled = true;
            document.querySelector('#remove').disabled = true;
            document.querySelector('#viewall').disabled = false;
            document.querySelector('#veiwondeptid').disabled = false;
            document.querySelector('#empname').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#deptid').value = "";
			
            all.viewallempdetailslogic();
        }
        else {
            document.querySelector('#msg').innerText = "Employee not Deleted";
            all.viewallempdetailslogic();
        }
    });
	
	
	
	
	

    const viewallid = document.querySelector("#viewall");
    viewallid.addEventListener('click', () => {

        all.viewallempdetailslogic();
    });
	
	

    const veiwondeptid1 = document.querySelector("#veiwondeptid");
    veiwondeptid1.addEventListener('click', () => {
        let input = document.querySelector("#deptid").value;
        console.log("input value " + input);
        if (input == "") {
            document.querySelector("#msg").innerText = "dept id not founde"
        }
        else {
            document.querySelector("#msg1").innerHTML = all.getonDeptidLogic(input);
        }
    });


});