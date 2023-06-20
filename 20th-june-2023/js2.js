function CreateNewTag() {

    const para1 = document.createElement("p");
    const par2 = document.createElement("p");
    const par3 = document.createElement("p");

    const node1 = document.createTextNode("This is new. Welcome");
    const node2 = document.createTextNode("This is new. Welcome");
    //const node3 = document.createTextNode("This is new. Welcome");

    para1.appendChild(node1);
    par2.appendChild(node2);
    par3.appendChild(node2);

    const element = document.getElementById("div1");
    element.appendChild(para1);
    element.appendChild(par2);
    element.appendChild(par3);
}


function createNewButton() {
    const btn = document.createElement("button");
    btn.innerHTML = "Hello Button";
    document.body.appendChild(btn);
}


function addNewEmployee() {
    const para1 = document.createElement("div");
    const par2 = document.createElement("div");

    const node1 = document.createTextNode("Santosh");
    const node2 = document.createTextNode("infosis");
    para1.appendChild(node1);
    par2.appendChild(node2);

    const element = document.getElementById("div1");
    element.appendChild(para1);
    element.appendChild(par2);
}