
const generateAge = () => {
    const userDob = document.getElementById('date');
    console.log(userDob.value);
    
    const currentDate = new Date();
    const userDobvalue = new Date(userDob.value);

    let userAge = currentDate.getFullYear() - userDobvalue.getFullYear();
    if(userDobvalue.getMonth() > currentDate.getMonth()) userAge--;
    
    output.innerText = `User Age is: ${userAge} years`;
    console.log(userAge);
}