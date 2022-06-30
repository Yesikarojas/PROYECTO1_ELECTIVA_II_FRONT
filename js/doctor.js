 
let getTable = async ()=> {
    let pet = await fetch('http://localhost:3000/doctors')
    let info = await pet.json()

    let bodyTable=""
    info.data.forEach((data)=>{
        bodyTable +=`<tr>
            <th>${data.id}</th>
            <td>${data.name}</td>
            <td>${data.phone}</td>
            <td>${data.age}</td>
            <td>${data.specialization}</td>
            <td>${(data.gender==true?"Femenino":"Masculino")}</td>
            <td >
                <a id="btnUpd" class="btn btn-sm btn-warning bi bi-pencil" data-toggle="modal" data-target="#updateModal" onclick="updDoctor('${data._id}')" ></a>
                <a id="btnDel" class="btn btn-sm btn-danger bi bi-x-lg" onclick="delDoctor('${data._id}')"></a>
            </td> 
        </tr>
        `
    })

    document.getElementById('tbody').innerHTML = bodyTable
}

async function updDoctor(id){
    console.log(`_id: ${id}`)
    const response = await fetch("http://localhost:3000/doctors/"+id,{
        method:'GET'
    })
    const result = await response.json()
    console.log(result.data.name)
    document.getElementById('code').value = result.data._id
    document.getElementById('dni').value = result.data.id
    document.getElementById('names').value = result.data.name
    document.getElementById('phone').value = result.data.phone
    document.getElementById('age').value = result.data.age
    document.getElementById('specialization').value = result.data.specialization
}

document.getElementById('saveChanges').addEventListener('click', async ()=>{

    const response = await fetch("http://localhost:3000/doctors/"+document.getElementById('code').value,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id" : document.getElementById('dni').value,
	        "name" : document.getElementById('names').value,
	        "phone" : document.getElementById('phone').value,
	        "age" : document.getElementById('age').value,
	        "specialization" : document.getElementById('specialization').value,
	        "gender" : document.getElementById('gender').value
        })
    })

    const result = await response.json()
    result.result==true ? window.alert("Paciente Modificado Con Éxito") : window.alert("Paciente No Modificado")
    getTable()
})


async function delDoctor(id){
    const response = await fetch("http://localhost:3000/doctors/"+id,{
        method:'DELETE'
    })
    const result = await response.json()
    result.result==true ? window.alert("Doctor Eliminado Con Éxito") : window.alert("Doctor No Eliminado")
    getTable()
}

getTable()
