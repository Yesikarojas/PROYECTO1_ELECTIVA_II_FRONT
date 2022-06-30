 
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
                <a id="btnUpd" class="btn btn-sm btn-warning bi bi-pencil" onclick="updPatient('${data._id}')" ></a>
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
}

async function delPatient(id){
    const response = await fetch("http://localhost:3000/patients/"+id,{
        method:'DELETE'
    })
    const result = await response.json()
    result.result==true ? window.alert("Paciente Eliminado Con Éxito") : window.alert("Paciente No Eliminado")
    getTable()
}

getTable()