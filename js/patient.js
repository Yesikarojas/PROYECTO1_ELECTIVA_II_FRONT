 
let getTable = async ()=> {
    let pet = await fetch('http://localhost:3000/patients')
    let info = await pet.json()

    let bodyTable=""
    info.data.forEach((data)=>{
        bodyTable +=`<tr>
            <th>${data.id}</th>
            <td>${data.name}</td>
            <td>${data.phone}</td>
            <td>${data.age}</td>
            <td>${data.eps}</td>
            <td>${(data.gender==true?"Femenino":"Masculino")}</td>
            <td >
                <a id="btnUpd" class="btn btn-sm btn-warning bi bi-pencil" data-toggle="modal" data-target="#updateModal" onclick="updPatient('${data._id}')"></a>
                <a id="btnDel" class="btn btn-sm btn-danger bi bi-x-lg" onclick="delPatient('${data._id}')"></a>
            </td> 
        </tr>
        `
    })

    document.getElementById('tbody').innerHTML = bodyTable
}

async function updPatient(id){
    console.log(`_id: ${id}`)
    const response = await fetch("http://localhost:3000/patients/"+id,{
        method:'GET'
    })
    const result = await response.json()
    console.log(result.data.name)
    document.getElementById('code').value = result.data._id
    document.getElementById('dni').value = result.data.id
    document.getElementById('names').value = result.data.name
    document.getElementById('phone').value = result.data.phone
    document.getElementById('age').value = result.data.age
    document.getElementById('eps').value = result.data.eps
}

document.getElementById('saveChanges').addEventListener('click', async ()=>{

    const response = await fetch("http://localhost:3000/patients/"+document.getElementById('code').value,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id" : document.getElementById('dni').value,
	        "name" : document.getElementById('names').value,
	        "phone" : document.getElementById('phone').value,
	        "age" : document.getElementById('age').value,
	        "eps" : document.getElementById('eps').value,
	        "gender" : document.getElementById('gender').value
        })
    })

    const result = await response.json()
    result.result==true ? window.alert("Paciente Modificado Con ??xito") : window.alert("Paciente No Modificado")
    getTable()
})

async function delPatient(id){
    const response = await fetch("http://localhost:3000/patients/"+id,{
        method:'DELETE'
    })
    const result = await response.json()
    result.result==true ? window.alert("Paciente Eliminado Con ??xito") : window.alert("Paciente No Eliminado")
    getTable()
}

getTable()