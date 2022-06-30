 
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
                <a id="btnUpd" class="btn btn-sm btn-warning bi bi-pencil"  ></a>
                <a id="btnDel" class="btn btn-sm btn-danger bi bi-x-lg" onclick="delDoctor('${data._id}')"></a>
            </td> 
        </tr>
        `
    })

    document.getElementById('tbody').innerHTML = bodyTable
}

async function delDoctor(id){
    const response = await fetch("http://localhost:3000/doctors/"+id,{
        method:'DELETE'
    })
    const result = await response.json()
    result.result==true ? window.alert("Doctor Eliminado Con Éxito") : window.alert("Doctor No Eliminado")
    getTable()
}

getTable()
