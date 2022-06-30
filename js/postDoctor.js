
document.getElementById('addDoctor').addEventListener('click', async ()=>{

    const response = await fetch("http://localhost:3000/doctors/",{
        method:'POST',
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
    result.result==true ? window.alert("Doctor Registrado Con Éxito") : window.alert("Doctor No Registrado")
})
