let btnreset = document.getElementById('btnreset')
btnreset.adddEventListener("click",() =>{
 let txtemail = document.getElementById('txtemail').value
auth.sendPasswordResetEmail(txtemail)
.then(() =>{
    alert("Reset link has been sent(If your email exists in our database)")
    txtemail.value =""
})
.catch((error) =>{
    alert("error message")
    console.log(error)
    txtemail.value =""
})
})