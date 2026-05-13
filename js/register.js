let btncreate =document.getElementById('btncreate')
btncreate.addEventListener('click',() =>{
    let txtfname = document.getElementById("txtfname").value
    let txtlname = document.getElementById("txtlname").value
    let txtemail = document.getElementById("txtemail").value
    let txtpass = document.getElementById("txtpass").value
    let txtcompass= document.getElementById("txtcompass").value

    if(txtfname == ""|| txtemail == "" || txtpass == ""){
        alert("Name and email filled")
    }
    else{
        if(txtcompass == txtpass){
            let emailid = txtemail.replace(/\./g,"_dot_").replace(/@/g, "_at_")
            let status ="active"
            let timenow = Date.now();
            let role ="Admin"
            firebase.auth().createUserWithEmailAndPassword(txtemail,txtpass)
                .then((userCredentials) =>{
                   firebase.database().ref('userDetails/'+emailid).set({
                    FirstName:txtfname,
                    lastName:txtlname,
                    Email:txtemail,
                    status:status,
                    createdBy:txtemail,
                    Role: role,
                    createdOn: timenow
                   })
                   alert("Account created")
                })
                .catch((error) =>{
                    console.log(error)
                    alert(error.message)
                })
        }else{
            alert("password do not match")
        }
    }
});