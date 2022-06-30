let getTable = async ()=> {
    let pet = await fetch('http://localhost:3000/consults')
    let info = await pet.json()

    let bodyTable=""
    info.data.forEach((data)=>{
        console.log(data)
        bodyTable +=`<tr>
            <th>${data.id}</th>
            <td>${data.office}</td>
            <td>${data.dateConsult}</td>
            <td>${data.reason}</td>
            <td>${data.patient}</td>
            <td>${data.doctor}</td>
            <td >
                <a id="btnDel" class="btn btn-sm btn-danger bi bi-x-lg" onclick="delConsult('${data._id}')"></a>
            </td> 
        </tr>
        `
    })

    document.getElementById('tbody').innerHTML = bodyTable
}
async function delConsult(id){
    const response = await fetch("http://localhost:3000/consults/"+id,{
        method:'DELETE'
    })
    const result = await response.json()
    result.result==true ? window.alert("Consulta Eliminada Con Éxito") : window.alert("consulta No Eliminada")
    getTable()
}

getTable()
