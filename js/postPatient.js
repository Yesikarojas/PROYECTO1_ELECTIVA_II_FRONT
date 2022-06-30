console.log('Hola')

document.getElementById('addPatient').addEventListener('click', async ()=>{
    const gender = ((document.getElementById('gender').value)=="F"?true:false)
    console.log(gender)
    const response = await fetch("http://localhost:3000/patients/",{
        method:'POST',
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
    console.log(result)

})
