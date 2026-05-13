let btnlogin = document.getElementById('btnlogin')
btnlogin.addEventListener( "click", ()=> {
    let txtusername = document.getElementById('txtusername').value
    let txtpass = document.getElementById('txtpass').value
    btnlogin.innerHTML= "please wait..."
    if(txtusername == ""|| txtpass == ""){
        alert("please fill all details.")
    }else{
        firebase.auth().setPersistence( firebase.auth.Auth.Persistence.SESSION)
        .then(()=>{
            return firebase.auth().signInWithEmailAndPassword(txtusername,txtpass)
        })
        .then((userCredential)=>{
            let emailid = txtusername.replace(/\./g,"_dot_").replace(/@/g, "_at_")
            return firebase.database().ref("userDetails/" +emailid).once("value")
        })
        .then((snapshot)=>{
            const userDetails = snapshot.val()
            const role =userDetails.Role 
            const status = userDetails.Status 
            if ( status == "active"){
                if (role== Admin){
                    //Admin
                    window.location.href ="dashboard.html"
                }
                else if(role == "student"){
                    //student
                    alert("student logged in")
                }
                else{
                    //active users with no roles
                      alert("No role added connect with Admin")
                }
            }else{
                //inactive account
                 alert("Account blocked connect with Admin")
            }
        })
        .catch((error) =>{
            alert("Wrong credentials")
            btnlogin.innerHTML = "Log in"
        })
    }

})