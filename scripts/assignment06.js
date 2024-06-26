const date = document.getElementById("date");
let today = new Date();
let yyyy = today.getFullYear().toString();
let mm = (today.getMonth() + 1).toString();
let dd = (today.getDate()).toString();

if(mm.length < 2){
    mm = `0${mm}`;
}
if(dd.length < 2){
    dd = `0${dd}`;
}
today = `${yyyy}-${mm}-${dd}`

// default today
date.setAttribute("value", today);
// not before today
date.setAttribute("min", today);
console.log(date.value);

const errors = document.getElementById("errors");
const questionMark = document.getElementById("question-mark") 
const showHide = document.getElementById("show-hide")
// test mouse hover on question mark

const studentIdInfo = document.createElement("div");
studentIdInfo.setAttribute("id", "student-id-info");
studentIdInfo.innerHTML = `<p>? BCIT Student IDs must match the pattern: A0####### where '#' is any number</p>`;
document.getElementById("lastname-row").appendChild(studentIdInfo);



questionMark.addEventListener("mouseover", function(){
    studentIdInfo.style.display = "block";
});
questionMark.addEventListener("mouseout", function(){
    studentIdInfo.style.display = "none";
})

const password = document.getElementById("password");
showHide.addEventListener("click", function(e){
    e.preventDefault();
    if(showHide.innerText == "Show"){
        password.type = "text";
        showHide.innerText = "Hide";
    }
    else{
        password.type = "password";
        showHide.innerText = "Show";
    }

})
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const studentid = document.getElementById("studentid");
const submit = document.getElementById("submit");
const course = document.getElementById("course");
submit.addEventListener("click", function(e){

let hasError = false;
    errors.innerHTML = '';
    const inputs = document.getElementsByTagName("input");
    const inputArray = [...inputs];
    inputArray.forEach(input => {
        input.style.backgroundColor = "white";
    });
    course.style.backgroundColor = "white";
    if(firstname.value.trim().length == 0){
        errors.innerHTML += `<p>Please provide first name.</p>`;
        firstname.style.backgroundColor = "pink";
        hasError = true;
    }
    if(lastname.value.trim().length == 0){
        errors.innerHTML += `<p>Please provide last name.</p>`;
        lastname.style.backgroundColor = "pink";
        hasError = true;
    }
    if(studentid.value.trim().length == 0){
        errors.innerHTML += `<p>Please provide student id.</p>`;
        studentid.style.backgroundColor = "pink";
        hasError = true;
    }
    else if(!/^a0[0-9]{7}$/i.test(studentid.value.trim())){
        errors.innerHTML += `<p>Please check the format of the student id.`
        studentid.style.backgroundColor = "pink";
        hasError = true;
    }
    if(password.value.trim().length == 0){
        errors.innerHTML += `<p>Please provide password.</p>`;
        password.style.backgroundColor = "pink";
        hasError = true;
    }
    if(course.value == "unselected"){
        errors.innerHTML += `<p>Please select a course.</p>`
        course.style.backgroundColor = "pink";
        hasError = true;
    }
    if(hasError){
        e.preventDefault();
        errors.innerHTML += `<p>!Warning: Form Submission Failed!</p>`;
    }
});
