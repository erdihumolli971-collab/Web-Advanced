function validation(){
    var  name = document.getElementById("name").value;

    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getElementById("age").value;

    var valid_age_regex = /^[0-9]+$/; 

    var city = document.getElementById("city").value;

    if(!(name.match(valid__name_regex))|| !(age.match(valid_age_regex)) || city== ""){
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor="red";
    }
    else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor="black";
     
    }

    if(!(age.match(valid__age_regex))|| !(age.match(valid_age_regex)) || city== ""){
        document.getElementById("age_error").style.visibility = "visible";
        document.getElementById("age").style.borderColor="red";
    }
    else{
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age").style.borderColor="black";
     
    }

    if(city ==""){
        document.getElementById("city_error").style.visibility = "visible";
        document.getElementById("city").style.borderColor="red";
    }else{
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city").style.borderColor="black";
    }

    return false;
     else{
    documnet.getElementById("name_error").style.visibility = "hidden";
    documnet.getElementById("name").style.borderColor = "black";
    documnet.getElementById("age_error").style.visibility = "hidden";
    documnet.getElementById("age").style.borderColor = "black";
    documnet.getElementById("city_error").style.visibility = "hidden";
    documnet.getElementById("city").style.borderColor = "black";

}
}