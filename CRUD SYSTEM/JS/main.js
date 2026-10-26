var seclectedRow =null;

function showAlert (message,className){
    const div =document.createElement("div");
    div.className =`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main =document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);

}
// CLEAR ALL DATA

function clearData(){
    document.querySelector("#id").value="";
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value="";
    document.querySelector("#Section").value="";
}

// ADD DATA
document.querySelector("#student-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    const id=document.querySelector("#id").value;
    const firstName=document.querySelector("#firstName").value;
    const lastName=document.querySelector("#lastName").value;
    const Section=document.querySelector("#Section").value;

    if(id==""||firstName==""||lastName==""||Section==""){
        showAlert("PLEASE , Fill in All Data","danger");
    }
    else{
        if(seclectedRow==null){
            const list=document.querySelector("#student-content");
            const row=document.createElement("tr");
            row.innerHTML=`<td>${id}</td>
                            <td>${firstName}</td>
                            <td>${lastName}</td>
                            <td>${Section}</td>
                            <td>
                                 <a href="#" class="btn btn-outline-light btn-sm edit">Update</a>
                                 <a href="#" class="btn btn-outline-danger btn-sm delete">Delete</a>
                            </td>
            `;
            list.appendChild(row);
            seclectedRow=null;
            showAlert("Student Added","danger");
        }
        else{
            seclectedRow.children[0].textContent =id;
            seclectedRow.children[1].textContent =firstName;
            seclectedRow.children[2].textContent =lastName;
            seclectedRow.children[3].textContent =Section;
            seclectedRow==null;
            showAlert("Student Info Edited","Info");
        }
        clearData();
    }
});

// EDIT DATA
document.querySelector("#student-content").addEventListener("click",(e)=>{
    target=e.target;

    if(target.classList.contains("edit")){
       seclectedRow=target.parentElement.parentElement;
       document.querySelector("#id").value=seclectedRow.children[0].textContent =id;
       document.querySelector("#firstName").value=seclectedRow.children[1].textContent =firstName;
       document.querySelector("#lastName").value=seclectedRow.children[2].textContent =lastName;
       document.querySelector("#Section").value=seclectedRow.children[3].textContent =Section;
    }

});

// DELETE
document.querySelector("#student-content").addEventListener("click",(e)=>{
    target=e.target;

    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted","danger");
    }
})