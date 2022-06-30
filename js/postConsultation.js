document.getElementById('addConsultation').addEventListener('click', async ()=>{

    const response = await fetch("http://localhost:3000/consults/",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id" : document.getElementById('dni').value,
	        "office" : document.getElementById('consultorio').value,
	        "dateConsult" : document.getElementById('dateConsult').value,
	        "reason" : document.getElementById('reason').value,
	        "patient" : document.getElementById('patient').value,
	        "doctor" : document.getElementById('doctor').value
        })
    })

    const result = await response.json()
    result.result==true ? window.alert("Consulta Registrada Con Éxito") : window.alert("consulta No Registrada")
})