// function hello(){
//     document.getElementById('nameheader').innerHTML="Hai Aparna"
// }



function checkInput() {
     let fname=document.forms["myform"]["firstname"].value
    if(fname=='')
    {
        alert('false')
        return false
    }
    else{
        alert('success')
    }
}