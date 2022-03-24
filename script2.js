


/* This is the function that removes the row */
let removeRowViaDeleteButton = (event) => {
    event.path[2].remove();
    alert("Your track has been removed")
}
/* Could use this one as well:  */
/* e.target.closest("tr").remove() */




let addTrackFunction = (event) => {
    let inputField1 = document.querySelector(".input1").value;
    let inputField2 = document.querySelector(".input2").value;
    let table = document.querySelector("body > div:nth-child(13) > div > table > tbody"); 
    let newTr = document.createElement("tr");
    newTr.classList.add("tables-rows")
    table.appendChild(newTr)

   newTr.innerHTML = `<tr class="tables-rows">
    <th scope="row">4</th>
    <td>${inputField1}</td>
    <td>${inputField2}</td>
    <td>
      <button type="button" onclick="removeRowViaDeleteButton(event)" class="btn btn-danger button3">
        Remove
      </button>
    </td>
  </tr>`

  alert("Success! Your track has been added.")
  console.log(event.target)
    
}

